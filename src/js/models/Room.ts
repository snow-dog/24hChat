import { Chat } from './Chat'

export interface Room {
  id: string,
  name: string,
  ttl: number,
  numberOfTimes: number,
  member: string[],
  img: File | string,
  chats: Chat[],
  roomUrl: string,
}