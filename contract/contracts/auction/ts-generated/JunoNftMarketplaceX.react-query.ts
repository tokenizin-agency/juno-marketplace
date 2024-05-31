/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.9.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { Decimal, Uint128, InstantiateMsg, ExecuteMsg, Binary, Cw721ReceiveMsg, QueryMsg, MigrateMsg, AllRoyaltyListResponse, AllRoyaltyResponse, AuctionType, AuctionResponse, AuctionListResponse, Addr, BidHistoryByAuctionIdResponse, Bid, CalculatePriceResponse, ConfigResponse, RoyaltyAdminResponse, RoyaltyFeeResponse, RoyaltyResponse, StateResponse } from "./JunoNftMarketplaceX.types";
import { JunoNftMarketplaceXQueryClient } from "./JunoNftMarketplaceX.client";
export const junoNftMarketplaceXQueryKeys = {
  contract: ([{
    contract: "junoNftMarketplaceX"
  }] as const),
  address: (contractAddress: string | undefined) => ([{
    ...junoNftMarketplaceXQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const),
  state: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "state",
    args
  }] as const),
  auction: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "auction",
    args
  }] as const),
  royaltyFee: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "royalty_fee",
    args
  }] as const),
  royaltyAdmin: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "royalty_admin",
    args
  }] as const),
  allRoyaltyFee: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "all_royalty_fee",
    args
  }] as const),
  calculatePrice: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "calculate_price",
    args
  }] as const),
  nftAuction: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "nft_auction",
    args
  }] as const),
  bidHistoryByAuctionId: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "bid_history_by_auction_id",
    args
  }] as const),
  bidsCount: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "bids_count",
    args
  }] as const),
  auctionByContract: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "auction_by_contract",
    args
  }] as const),
  auctionBySeller: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "auction_by_seller",
    args
  }] as const),
  auctionByAmount: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "auction_by_amount",
    args
  }] as const),
  auctionByEndTime: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "auction_by_end_time",
    args
  }] as const),
  notStartedAuction: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "not_started_auction",
    args
  }] as const),
  auctionByBidder: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...junoNftMarketplaceXQueryKeys.address(contractAddress)[0],
    method: "auction_by_bidder",
    args
  }] as const)
};
export const junoNftMarketplaceXQueries = {
  config: <TData = ConfigResponse,>({
    client,
    options
  }: JunoNftMarketplaceXConfigQuery<TData>): UseQueryOptions<ConfigResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.config(client?.contractAddress),
    queryFn: () => client ? client.config() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  state: <TData = StateResponse,>({
    client,
    options
  }: JunoNftMarketplaceXStateQuery<TData>): UseQueryOptions<StateResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.state(client?.contractAddress),
    queryFn: () => client ? client.state() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  auction: <TData = AuctionResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXAuctionQuery<TData>): UseQueryOptions<AuctionResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.auction(client?.contractAddress, args),
    queryFn: () => client ? client.auction({
      auctionId: args.auctionId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  royaltyFee: <TData = RoyaltyFeeResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXRoyaltyFeeQuery<TData>): UseQueryOptions<RoyaltyFeeResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.royaltyFee(client?.contractAddress, args),
    queryFn: () => client ? client.royaltyFee({
      contractAddr: args.contractAddr
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  royaltyAdmin: <TData = RoyaltyAdminResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXRoyaltyAdminQuery<TData>): UseQueryOptions<RoyaltyAdminResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.royaltyAdmin(client?.contractAddress, args),
    queryFn: () => client ? client.royaltyAdmin({
      address: args.address
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  allRoyaltyFee: <TData = AllRoyaltyListResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXAllRoyaltyFeeQuery<TData>): UseQueryOptions<AllRoyaltyListResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.allRoyaltyFee(client?.contractAddress, args),
    queryFn: () => client ? client.allRoyaltyFee({
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  calculatePrice: <TData = CalculatePriceResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXCalculatePriceQuery<TData>): UseQueryOptions<CalculatePriceResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.calculatePrice(client?.contractAddress, args),
    queryFn: () => client ? client.calculatePrice({
      amount: args.amount,
      nftContract: args.nftContract,
      tokenId: args.tokenId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  nftAuction: <TData = AuctionResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXNftAuctionQuery<TData>): UseQueryOptions<AuctionResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.nftAuction(client?.contractAddress, args),
    queryFn: () => client ? client.nftAuction({
      nftContract: args.nftContract,
      tokenId: args.tokenId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  bidHistoryByAuctionId: <TData = BidHistoryByAuctionIdResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXBidHistoryByAuctionIdQuery<TData>): UseQueryOptions<BidHistoryByAuctionIdResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.bidHistoryByAuctionId(client?.contractAddress, args),
    queryFn: () => client ? client.bidHistoryByAuctionId({
      auctionId: args.auctionId,
      limit: args.limit
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  bidsCount: <TData = AuctionResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXBidsCountQuery<TData>): UseQueryOptions<AuctionResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.bidsCount(client?.contractAddress, args),
    queryFn: () => client ? client.bidsCount({
      auctionId: args.auctionId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  auctionByContract: <TData = AuctionListResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXAuctionByContractQuery<TData>): UseQueryOptions<AuctionListResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.auctionByContract(client?.contractAddress, args),
    queryFn: () => client ? client.auctionByContract({
      limit: args.limit,
      nftContract: args.nftContract
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  auctionBySeller: <TData = AuctionListResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXAuctionBySellerQuery<TData>): UseQueryOptions<AuctionListResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.auctionBySeller(client?.contractAddress, args),
    queryFn: () => client ? client.auctionBySeller({
      limit: args.limit,
      seller: args.seller
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  auctionByAmount: <TData = AuctionListResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXAuctionByAmountQuery<TData>): UseQueryOptions<AuctionListResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.auctionByAmount(client?.contractAddress, args),
    queryFn: () => client ? client.auctionByAmount({
      amount: args.amount,
      limit: args.limit,
      nftContract: args.nftContract
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  auctionByEndTime: <TData = AuctionListResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXAuctionByEndTimeQuery<TData>): UseQueryOptions<AuctionListResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.auctionByEndTime(client?.contractAddress, args),
    queryFn: () => client ? client.auctionByEndTime({
      endTime: args.endTime,
      isDesc: args.isDesc,
      limit: args.limit,
      nftContract: args.nftContract
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  notStartedAuction: <TData = AuctionListResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXNotStartedAuctionQuery<TData>): UseQueryOptions<AuctionListResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.notStartedAuction(client?.contractAddress, args),
    queryFn: () => client ? client.notStartedAuction({
      isDesc: args.isDesc,
      limit: args.limit,
      nftContract: args.nftContract,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  auctionByBidder: <TData = AuctionListResponse,>({
    client,
    args,
    options
  }: JunoNftMarketplaceXAuctionByBidderQuery<TData>): UseQueryOptions<AuctionListResponse, Error, TData> => ({
    queryKey: junoNftMarketplaceXQueryKeys.auctionByBidder(client?.contractAddress, args),
    queryFn: () => client ? client.auctionByBidder({
      bidder: args.bidder,
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface JunoNftMarketplaceXReactQuery<TResponse, TData = TResponse> {
  client: JunoNftMarketplaceXQueryClient | undefined;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface JunoNftMarketplaceXAuctionByBidderQuery<TData> extends JunoNftMarketplaceXReactQuery<AuctionListResponse, TData> {
  args: {
    bidder: string;
    limit?: number;
    startAfter?: number;
  };
}
export function useJunoNftMarketplaceXAuctionByBidderQuery<TData = AuctionListResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXAuctionByBidderQuery<TData>) {
  return useQuery<AuctionListResponse, Error, TData>(junoNftMarketplaceXQueryKeys.auctionByBidder(client?.contractAddress, args), () => client ? client.auctionByBidder({
    bidder: args.bidder,
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXNotStartedAuctionQuery<TData> extends JunoNftMarketplaceXReactQuery<AuctionListResponse, TData> {
  args: {
    isDesc?: boolean;
    limit?: number;
    nftContract: string;
    startAfter?: number;
  };
}
export function useJunoNftMarketplaceXNotStartedAuctionQuery<TData = AuctionListResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXNotStartedAuctionQuery<TData>) {
  return useQuery<AuctionListResponse, Error, TData>(junoNftMarketplaceXQueryKeys.notStartedAuction(client?.contractAddress, args), () => client ? client.notStartedAuction({
    isDesc: args.isDesc,
    limit: args.limit,
    nftContract: args.nftContract,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXAuctionByEndTimeQuery<TData> extends JunoNftMarketplaceXReactQuery<AuctionListResponse, TData> {
  args: {
    endTime: number;
    isDesc?: boolean;
    limit?: number;
    nftContract: string;
  };
}
export function useJunoNftMarketplaceXAuctionByEndTimeQuery<TData = AuctionListResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXAuctionByEndTimeQuery<TData>) {
  return useQuery<AuctionListResponse, Error, TData>(junoNftMarketplaceXQueryKeys.auctionByEndTime(client?.contractAddress, args), () => client ? client.auctionByEndTime({
    endTime: args.endTime,
    isDesc: args.isDesc,
    limit: args.limit,
    nftContract: args.nftContract
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXAuctionByAmountQuery<TData> extends JunoNftMarketplaceXReactQuery<AuctionListResponse, TData> {
  args: {
    amount: Uint128;
    limit?: number;
    nftContract: string;
  };
}
export function useJunoNftMarketplaceXAuctionByAmountQuery<TData = AuctionListResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXAuctionByAmountQuery<TData>) {
  return useQuery<AuctionListResponse, Error, TData>(junoNftMarketplaceXQueryKeys.auctionByAmount(client?.contractAddress, args), () => client ? client.auctionByAmount({
    amount: args.amount,
    limit: args.limit,
    nftContract: args.nftContract
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXAuctionBySellerQuery<TData> extends JunoNftMarketplaceXReactQuery<AuctionListResponse, TData> {
  args: {
    limit?: number;
    seller: string;
  };
}
export function useJunoNftMarketplaceXAuctionBySellerQuery<TData = AuctionListResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXAuctionBySellerQuery<TData>) {
  return useQuery<AuctionListResponse, Error, TData>(junoNftMarketplaceXQueryKeys.auctionBySeller(client?.contractAddress, args), () => client ? client.auctionBySeller({
    limit: args.limit,
    seller: args.seller
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXAuctionByContractQuery<TData> extends JunoNftMarketplaceXReactQuery<AuctionListResponse, TData> {
  args: {
    limit?: number;
    nftContract: string;
  };
}
export function useJunoNftMarketplaceXAuctionByContractQuery<TData = AuctionListResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXAuctionByContractQuery<TData>) {
  return useQuery<AuctionListResponse, Error, TData>(junoNftMarketplaceXQueryKeys.auctionByContract(client?.contractAddress, args), () => client ? client.auctionByContract({
    limit: args.limit,
    nftContract: args.nftContract
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXBidsCountQuery<TData> extends JunoNftMarketplaceXReactQuery<AuctionResponse, TData> {
  args: {
    auctionId: Uint128;
  };
}
export function useJunoNftMarketplaceXBidsCountQuery<TData = AuctionResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXBidsCountQuery<TData>) {
  return useQuery<AuctionResponse, Error, TData>(junoNftMarketplaceXQueryKeys.bidsCount(client?.contractAddress, args), () => client ? client.bidsCount({
    auctionId: args.auctionId
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXBidHistoryByAuctionIdQuery<TData> extends JunoNftMarketplaceXReactQuery<BidHistoryByAuctionIdResponse, TData> {
  args: {
    auctionId: Uint128;
    limit?: number;
  };
}
export function useJunoNftMarketplaceXBidHistoryByAuctionIdQuery<TData = BidHistoryByAuctionIdResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXBidHistoryByAuctionIdQuery<TData>) {
  return useQuery<BidHistoryByAuctionIdResponse, Error, TData>(junoNftMarketplaceXQueryKeys.bidHistoryByAuctionId(client?.contractAddress, args), () => client ? client.bidHistoryByAuctionId({
    auctionId: args.auctionId,
    limit: args.limit
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXNftAuctionQuery<TData> extends JunoNftMarketplaceXReactQuery<AuctionResponse, TData> {
  args: {
    nftContract: string;
    tokenId: string;
  };
}
export function useJunoNftMarketplaceXNftAuctionQuery<TData = AuctionResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXNftAuctionQuery<TData>) {
  return useQuery<AuctionResponse, Error, TData>(junoNftMarketplaceXQueryKeys.nftAuction(client?.contractAddress, args), () => client ? client.nftAuction({
    nftContract: args.nftContract,
    tokenId: args.tokenId
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXCalculatePriceQuery<TData> extends JunoNftMarketplaceXReactQuery<CalculatePriceResponse, TData> {
  args: {
    amount: Uint128;
    nftContract: string;
    tokenId: string;
  };
}
export function useJunoNftMarketplaceXCalculatePriceQuery<TData = CalculatePriceResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXCalculatePriceQuery<TData>) {
  return useQuery<CalculatePriceResponse, Error, TData>(junoNftMarketplaceXQueryKeys.calculatePrice(client?.contractAddress, args), () => client ? client.calculatePrice({
    amount: args.amount,
    nftContract: args.nftContract,
    tokenId: args.tokenId
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXAllRoyaltyFeeQuery<TData> extends JunoNftMarketplaceXReactQuery<AllRoyaltyListResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useJunoNftMarketplaceXAllRoyaltyFeeQuery<TData = AllRoyaltyListResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXAllRoyaltyFeeQuery<TData>) {
  return useQuery<AllRoyaltyListResponse, Error, TData>(junoNftMarketplaceXQueryKeys.allRoyaltyFee(client?.contractAddress, args), () => client ? client.allRoyaltyFee({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXRoyaltyAdminQuery<TData> extends JunoNftMarketplaceXReactQuery<RoyaltyAdminResponse, TData> {
  args: {
    address: string;
  };
}
export function useJunoNftMarketplaceXRoyaltyAdminQuery<TData = RoyaltyAdminResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXRoyaltyAdminQuery<TData>) {
  return useQuery<RoyaltyAdminResponse, Error, TData>(junoNftMarketplaceXQueryKeys.royaltyAdmin(client?.contractAddress, args), () => client ? client.royaltyAdmin({
    address: args.address
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXRoyaltyFeeQuery<TData> extends JunoNftMarketplaceXReactQuery<RoyaltyFeeResponse, TData> {
  args: {
    contractAddr: string;
  };
}
export function useJunoNftMarketplaceXRoyaltyFeeQuery<TData = RoyaltyFeeResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXRoyaltyFeeQuery<TData>) {
  return useQuery<RoyaltyFeeResponse, Error, TData>(junoNftMarketplaceXQueryKeys.royaltyFee(client?.contractAddress, args), () => client ? client.royaltyFee({
    contractAddr: args.contractAddr
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXAuctionQuery<TData> extends JunoNftMarketplaceXReactQuery<AuctionResponse, TData> {
  args: {
    auctionId: Uint128;
  };
}
export function useJunoNftMarketplaceXAuctionQuery<TData = AuctionResponse>({
  client,
  args,
  options
}: JunoNftMarketplaceXAuctionQuery<TData>) {
  return useQuery<AuctionResponse, Error, TData>(junoNftMarketplaceXQueryKeys.auction(client?.contractAddress, args), () => client ? client.auction({
    auctionId: args.auctionId
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXStateQuery<TData> extends JunoNftMarketplaceXReactQuery<StateResponse, TData> {}
export function useJunoNftMarketplaceXStateQuery<TData = StateResponse>({
  client,
  options
}: JunoNftMarketplaceXStateQuery<TData>) {
  return useQuery<StateResponse, Error, TData>(junoNftMarketplaceXQueryKeys.state(client?.contractAddress), () => client ? client.state() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface JunoNftMarketplaceXConfigQuery<TData> extends JunoNftMarketplaceXReactQuery<ConfigResponse, TData> {}
export function useJunoNftMarketplaceXConfigQuery<TData = ConfigResponse>({
  client,
  options
}: JunoNftMarketplaceXConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(junoNftMarketplaceXQueryKeys.config(client?.contractAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}