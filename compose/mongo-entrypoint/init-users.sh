#!/bin/bash
set -e

mongosh <<EOF
use admin 
db.createUser({
    user: "root",
    pwd: "root",
    roles: ["userAdminAnyDatabase", "readWriteAnyDatabase"]
})

use oxygen
db.createUser({
    user: "root",
    pwd: "root",
    roles: ["dbOwner"]
})
EOF