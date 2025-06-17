export interface CreateExchangeRateParams {
  baseCurrency: string;
  targetCurrency: string;
  rate: number;
  tenantId: string;
  hotelId: string;
}

export interface UpdateExchangeRateParams {
  id: string;
  baseCurrency?: string;
  targetCurrency?: string;
  rate?: number;
  tenantId: string;
  hotelId: string;
}

export interface ExchangeRate {
  id: string;
  baseCurrency: string;
  targetCurrency: string;
  rate: number;
  tenantId: string;
  hotelId: string;
  createdAt: Date;
  updatedAt: Date;
}
