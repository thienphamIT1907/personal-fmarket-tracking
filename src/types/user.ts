export type UserProfileResponse = {
  status: number;
  code: number;
  time: number;
  message: string;
  target: unknown;
  data: UserData;
  extra: Extra;
};

export interface UserData {
  tokenType: string;
  expireAt: number;
  profile: UserProfile;
  mustLogin2Steps: unknown;
  isFirstLogin: boolean;
  isSubFo: unknown;
  foResources: unknown;
  accessToken: string;
}

export interface UserProfile {
  id: number;
  encodeURL: string;
  code: string;
  name: string;
  email: string;
  email2: string;
  shortName: unknown;
  idType: IdType;
  passport: string;
  passportDateOfIssue: string;
  passportDateOfIssueModel: PassportDateOfIssueModel;
  passportPlaceOfIssue: string;
  passportPlaceOfIssueModel: PassportPlaceOfIssueModel;
  taxCode: string;
  address: string;
  address1: string;
  address2: string;
  authorizedPerson: unknown;
  phone: string;
  phonePostal: string;
  phoneCountryCode: string;
  website: unknown;
  websiteURL: unknown;
  stockTradingCode: unknown;
  rank: unknown;
  aboutUs: unknown;
  country: Country;
  userType: string;
  status: string;
  issuerTypeId: unknown;
  issuerType: unknown;
  provinceId: number;
  province: Province;
  gender: number;
  birthDate: string;
  birthDateModel: BirthDateModel;
  isPersonalInvestor: boolean;
  isHaveAsset: boolean;
  isHaveOrderBuyFund: boolean;
  balance: unknown;
  bankAccounts: BankAccount[];
  bankAccountEGolds: unknown[];
  followingIssuers: unknown[];
  followingBondIssuers: unknown[];
  photos: Photo[];
  secondContactInfo: SecondContactInfo;
  documents: unknown;
  additionalDocuments: AdditionalDocument[];
  isFirstLogin: boolean;
  hasActiveProfile: boolean;
  needSignContract: boolean;
  needSignChangeInfo: boolean;
  pendingProfileCounter: PendingProfileCounter;
  emailVerified: boolean;
  phoneVerified: boolean;
  thirdApps: unknown;
  isDelete: boolean;
  isSetRefCode: unknown;
  refCode: unknown;
  referralCode: string;
  totalDayInUse: number;
  totalValidRefUser: number;
  isPartner: boolean;
  isKyc: boolean;
  isHsbcAgent: unknown;
  isContractPartner: unknown;
  isZaloOtp: boolean;
  isSmartOtp: unknown;
  isLinkedGold: unknown;
  isFailedGoldCreateLink: unknown;
  profileStep: number;
  avatarUrl: string;
  isShowFeedbackCustomerCare: boolean;
  isShowInputReferralCode: boolean;
  introduceAgentCode: unknown;
  languageId: LanguageId;
  activeDate: number;
  isShowWalletReward: boolean;
  isShowDiscoverSmartPortfolio: boolean;
  isExistingGoalActive: boolean;
  isHiddenAsset: unknown;
  isAuthByC06: unknown;
  isAutoApprovePayment: boolean;
  isHiddenSmartPortfolioValue: unknown;
  isRequiredFatca: boolean;
  isReceiveNotifyOpenSellGold: boolean;
  isFatca: unknown;
  fatcaCode: unknown;
  isAcceptedTermsBuyGold: unknown;
  acceptedTermsBuyGoldAt: unknown;
  nickname: unknown;
  consultingPartner: unknown;
  requestConsultingPartner: unknown;
}

export interface IdType {
  id: number;
  code: string;
  name: string;
  vsdCode: string;
  weight: number;
  isEnable: boolean;
  isEnablePersonalInvestor: boolean;
  isEnableOrganizationInvestor: boolean;
}

export interface PassportDateOfIssueModel {
  dd: string;
  mm: string;
  yyyy: string;
}

export interface PassportPlaceOfIssueModel {
  id: number;
  name: string;
  administrativeCode: string;
}

export interface Country {
  id: number;
  code: string;
  name: string;
  postalCode: string;
  nationalityCode: string;
  hsbcCode: string;
  weight: number;
}

export interface Province {
  id: number;
  name: string;
  administrativeCode: string;
}

export interface BirthDateModel {
  dd: string;
  mm: string;
  yyyy: string;
}

export interface BankAccount {
  id: number;
  name: string;
  number: string;
  branch: string;
  bankInfo: BankInfo;
  status: string;
}

export interface BankInfo {
  id: number;
  name: string;
  shortName: string;
  stockName: string;
  binCode: string;
  swiftCode: unknown;
  hsbcCode: string;
  hsbcName: string;
  hsbcDefaultBranchCode: string;
  website: string;
  appId: unknown;
  appIcon: string;
  branches: unknown[];
}

export interface Photo {
  url: string;
  fileName: string;
  photoType: string;
}

export interface SecondContactInfo {
  id: unknown;
  name: unknown;
  email: unknown;
  passport: unknown;
  address: unknown;
  phone: unknown;
  phonePostal: unknown;
  country: unknown;
  relationship: unknown;
  monthNotActiveNotify: unknown;
  photos: unknown[];
}

export interface AdditionalDocument {
  id: number;
  url: string;
  fileName: string;
  productId: unknown;
  product: unknown;
  type: string;
  createAt: number;
}

export type PendingProfileCounter = object;

export interface LanguageId {
  id: number;
  code: string;
  name: string;
}

export interface Extra {
  clientCode: string;
  clientVersion: string;
  cmsVersion: string;
}
