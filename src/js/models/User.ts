import { Room } from './Room'

export interface User {
  id: string
 	name: string,
 	icon: HTMLImageElement | string | File,
 	myPage: string,
  desc: string,
  rooms: Room[],
}