const SearchParamProps = {
  params: [key],
  searchParams: { [key]: undefined },
};

const SignUpParams = {
  firstName,
  lastName,
  address1,
  city,
  state,
  postalCode,
  dateOfBirth,
  ssn,
  email,
  password,
};

const LoginUser = {
  email,
  password,
};

const User = {
  $id,
  email,
  userId,
  dwollaCustomerUrl,
  dwollaCustomerId,
  firstName,
  lastName,
  address1,
  city,
  state,
  postalCode,
  dateOfBirth,
  ssn,
};

const NewUserParams = {
  userId,
  email,
  name,
  password,
};

const Account = {
  id,
  availableBalance,
  currentBalance,
  officialName,
  mask,
  institutionId,
  name,
  type,
  subtype,
  appwriteItemId,
  sharableId,
};

const Transaction = {
  id,
  $id,
  name,
  paymentChannel,
  type,
  accountId,
  amount,
  pending,
  category,
  date,
  image,
  type,
  $createdAt,
  channel,
  senderBankId,
  receiverBankId,
};

const Bank = {
  $id,
  accountId,
  bankId,
  accessToken,
  fundingSourceUrl,
  userId,
  sharableId,
};

const AccountTypes = "depository" | "credit" | "loan " | "investment" | "other";

const Category = "Food and Drink" | "Travel" | "Transfer";

const CategoryCount = {
  name,
  count,
  totalCount,
};

const Receiver = {
  firstName,
  lastName,
};

const TransferParams = {
  sourceFundingSourceUrl,
  destinationFundingSourceUrl,
  amount,
};

const AddFundingSourceParams = {
  dwollaCustomerId,
  processorToken,
  bankName,
};

const NewDwollaCustomerParams = {
  firstName,
  lastName,
  email,
  type,
  address1,
  city,
  state,
  postalCode,
  dateOfBirth,
  ssn,
};
