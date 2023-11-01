import {
  Approval as ApprovalEvent,
  BlockedReward as BlockedRewardEvent,
  BurnFluid as BurnFluidEvent,
  Emergency as EmergencyEvent,
  FeeSet as FeeSetEvent,
  MaxUncheckedRewardLimitChanged as MaxUncheckedRewardLimitChangedEvent,
  MintApproval as MintApprovalEvent,
  MintFluid as MintFluidEvent,
  NewCouncil as NewCouncilEvent,
  NewOperator as NewOperatorEvent,
  NewUnderlyingAsset as NewUnderlyingAssetEvent,
  Reward as RewardEvent,
  RewardQuarantineThresholdUpdated as RewardQuarantineThresholdUpdatedEvent,
  Transfer as TransferEvent,
  UnblockReward as UnblockRewardEvent
} from "../generated/Fluid USDC/fluid_asset"
import {
  Approval,
  BlockedReward,
  BurnFluid,
  Emergency,
  FeeSet,
  MaxUncheckedRewardLimitChanged,
  MintApproval,
  MintFluid,
  NewCouncil,
  NewOperator,
  NewUnderlyingAsset,
  Reward,
  RewardQuarantineThresholdUpdated,
  Transfer,
  UnblockReward
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlockedReward(event: BlockedRewardEvent): void {
  let entity = new BlockedReward(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.winner = event.params.winner
  entity.amount = event.params.amount
  entity.startBlock = event.params.startBlock
  entity.endBlock = event.params.endBlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBurnFluid(event: BurnFluidEvent): void {
  let entity = new BurnFluid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergency(event: EmergencyEvent): void {
  let entity = new Emergency(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeSet(event: FeeSetEvent): void {
  let entity = new FeeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._originalMintFee = event.params._originalMintFee
  entity._newMintFee = event.params._newMintFee
  entity._originalBurnFee = event.params._originalBurnFee
  entity._newBurnFee = event.params._newBurnFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxUncheckedRewardLimitChanged(
  event: MaxUncheckedRewardLimitChangedEvent
): void {
  let entity = new MaxUncheckedRewardLimitChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintApproval(event: MintApprovalEvent): void {
  let entity = new MintApproval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintFluid(event: MintFluidEvent): void {
  let entity = new MintFluid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewCouncil(event: NewCouncilEvent): void {
  let entity = new NewCouncil(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldCouncil = event.params.oldCouncil
  entity.newCouncil = event.params.newCouncil

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewOperator(event: NewOperatorEvent): void {
  let entity = new NewOperator(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.old = event.params.old
  entity.new_ = event.params.new_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewUnderlyingAsset(event: NewUnderlyingAssetEvent): void {
  let entity = new NewUnderlyingAsset(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._old = event.params._old
  entity._new = event.params._new

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReward(event: RewardEvent): void {
  let entity = new Reward(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.winner = event.params.winner
  entity.amount = event.params.amount
  entity.startBlock = event.params.startBlock
  entity.endBlock = event.params.endBlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardQuarantineThresholdUpdated(
  event: RewardQuarantineThresholdUpdatedEvent
): void {
  let entity = new RewardQuarantineThresholdUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnblockReward(event: UnblockRewardEvent): void {
  let entity = new UnblockReward(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.originalRewardTx = event.params.originalRewardTx
  entity.winner = event.params.winner
  entity.amount = event.params.amount
  entity.startBlock = event.params.startBlock
  entity.endBlock = event.params.endBlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
