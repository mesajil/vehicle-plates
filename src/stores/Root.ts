import Plates from './Plates'

export class Root {
  plateStore: Plates
  constructor() {
    this.plateStore = new Plates()
  }
}

const rootStore = new Root()
export default rootStore
