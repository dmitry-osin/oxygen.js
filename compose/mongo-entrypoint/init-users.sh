#!/bin/bash
set -e

mongosh <<EOF
use oxygen
db.createUser({
    user: "root",
    pwd: "root",
    roles: ["dbOwner"]
})
EOF