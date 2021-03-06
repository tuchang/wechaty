import { MemoryCard } from 'memory-card'

/**
 * This is used internally to as a placeholder for the bot name.
 *
 * For example:
 *  we should replace '你' and 'You' to YOU.
 *
 * See: https://github.com/Microsoft/TypeScript/issues/20898#issuecomment-354073352
 */
export const YOU = Symbol('You')
export type YOU  = typeof YOU

export interface PuppetScanEvent {
  data?  : string,   // Other Data
  qrcode : string,   // QR Code Data
  status : number,   // Status Code
}

export interface PuppetRoomJoinEvent {
  inviteeNameList : (string | YOU)[],
  inviterName     : string | YOU,
  roomId          : string,
}

export interface PuppetRoomLeaveEvent {
  leaverNameList : (string | YOU)[],
  removerName    : string | YOU,
  roomId         : string,
}

export interface PuppetRoomTopicEvent {
  changerName : string | YOU,
  roomId      : string,
  topic       : string,
}

export const CHAT_EVENT_DICT = {
  friendship  : 'document can be writen at here',
  login       : 'document can be writen at here',
  logout      : 'document can be writen at here',
  message     : 'document can be writen at here',
  'room-join' : 'document can be writen at here',
  'room-leave': 'document can be writen at here',
  'room-topic': 'document can be writen at here',
  scan        : 'document can be writen at here',
}
export type ChatEventName = keyof typeof CHAT_EVENT_DICT

export const PUPPET_EVENT_DICT = {
  ...CHAT_EVENT_DICT,
  error     : 'document can be writen at here',
  start     : 'document can be writen at here',
  stop      : 'document can be writen at here',
  watchdog  : 'document can be writen at here',
}

export type PuppetEventName = keyof typeof PUPPET_EVENT_DICT

/**
 * timeout: WatchDog Timeout in Seconds
 */
export interface PuppetOptions {
  memory   : MemoryCard,
  timeout? : number,
}

export interface Receiver {
  contactId? : string,
  roomId?    : string,
}
