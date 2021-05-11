export interface Chat {
  user: {
    userId: string
    userName: string
    userIcon: string
  },
  message: string,
  time: number,
}