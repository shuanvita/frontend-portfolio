export interface IGlobalData {
  header: {
    logo: {
      name: string
      to: string
    }
    navigation: INavigationItem[]
  }
}

export interface INavigationItem {
  to: string
  text: string
}
