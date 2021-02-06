export const JobType = {
  IO: {value: 0, name: 'IO'},
  NET: {value: 1, name: 'NET'},
  UNPACK: {value: 3, name: 'UNPACK'}
}

export default class Job {

  /**
   * @param command {string}
   * @param title {string}
   * @param description {string}
   * @param jobType {JobType}
   * @param required {boolean}
   */
  constructor (command, title, description, jobType, required) {}

}