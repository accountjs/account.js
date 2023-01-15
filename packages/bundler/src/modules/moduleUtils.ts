// misc utilities for the various modules.

import { UserOperationStruct } from '@aa-lib/contracts'
import { NotPromise } from '@aa-lib/utils'
import { BytesLike } from 'ethers'
import { hexlify } from 'ethers/lib/utils'

export type UserOperation = NotPromise<UserOperationStruct>

// extract address from initCode or paymasterAndData
export function getAddr (data?: BytesLike): string | undefined {
  if (data == null) {
    return undefined
  }
  const str = hexlify(data)
  if (str.length >= 42) {
    return str.slice(0, 42)
  }
  return undefined
}
