export enum PaymentMethod {
  /**
   * Get paid via Paypal. The PaypalEmailAddress field will be required if you use this PaymentMethod.
   */
  PAYPAL = "PAYPAL",
  /**
   * Get paid via Electronic Funds Transfer (EFT). In order to get paid via EFT, you will be required to provide bank account information.
   */
  BANK_TRANSFER = "BANK_TRANSFER",
}

export enum BeneficiaryClassification {
  /**
   * Business Bank Account
   */
  BUSINESS = "BUSINESS",
  /**
   * Personal Bank Account
   */
  INDIVIDUAL = "INDIVIDUAL",
  /**
   * Text identification code for brazil
   */
  CPF = "CPF",
  /**
   * Tax identification code for Brazil
   */
  CNPJ = "CNPJ",
}

export enum BankAccountType {
  /**
   * Checking bank account.
   */
  CHECKING = "CHECKING",
  /**
   * Savings bank account.
   */
  SAVINGS = "SAVINGS",
  /**
   * No bank account type specified.
   */
  NOT_SET = "NOT_SET",
}

export enum PaymentSchedulingType {
  /**
   * This option allows you to withdraw the balance from your impact.com account after it reaches a selected amount. Min: $20USD, Max: $10 000USD
   */
  BALANCE_THRESHOLD = "BALANCE_THRESHOLD",
  /**
   * This option allows you to withdraw funds from your impact.com account on either the 1st or 15th of a given month. Min withdrawal balance $10USD.
   */
  FIXED_DAY = "FIXED_DAY",
}

export type WithdrawalSettings = {
  /**
   * These are the possible ways in which a Brand can pay you.
   */
  PaymentMethod: PaymentMethod;
  /**
   * The email address of your Paypal account. The PaymentMethod must be set to PAYPAL in order to update this field.
   */
  PaypalEmailAddress: string;
  /**
   * The account name of the bank account related to your EFT withdrawal settings.
   */
  BeneficiaryAccountName: string;
  /**
   * Two-letter ISO 3166-1 alpha-2 country code of the country in which the partner's bank operates.
   */
  BankCountry: string;
  BeneficiaryClassification: BeneficiaryClassification;
  /**
   * The alternative account name of the bank account related to your EFT withdrawal settings.
   */
  BeneficiaryAlternativeName: string;
  /**
   * Tax identification number for the beneficiary.
   */
  BeneficiaryTaxPayerId: string;
  BankAccountType: BankAccountType;
  /**
   * Bank account number to which EFT payments should be made.
   */
  BankAccountNumber: string;
  /**
   * A code used to identify the country, bank, and branch that an account is registered to. Use this if your account is located outside of the United States.
   */
  SwiftCode: string;
  /**
   * A 9-digit code that identifies where your bank account was opened.
   */
  RoutingCode: string;
  /**
   * A 5-digit code used by Russian banks to enable payments.
   */
  VoCode: string;
  /**
   * For banks that specify the need for an agency code to receive payments.
   */
  AgencyCode: string;
  /**
   * Address of the bank branch where your account was opened.
   */
  BankAddress: string;
  /**
   * The postal code of the address of the bank branch where your account was opened.
   */
  BankPostalCode: string;
  /**
   * The city of the address of the bank branch where your account was opened.
   */
  BankCity: string;
  /**
   * The state or province of the address of the bank branch where your account was opened.
   */
  BankState: string;
  /**
   * Unique identifier of the branch for your bank account.
   */
  BranchCode: string;
  PaymentSchedulingType: PaymentSchedulingType;
  /**
   * The amount to which you would like to set your balance threshold payment scheduling setting. Min: $20USD, Max: $10 000USD.
   */
  PaymentThreshold: string;
  /**
   * If you've set your payment scheduling setting to a fixed day, you can select either the 1st or the 15th of the month for impact.com to payout.
   */
  PaymentDay: number;
  BankName: string;
  Uri: string;
};
