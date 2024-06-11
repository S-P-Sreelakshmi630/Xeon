import { useState } from "react";
import "./PaymentStyle.css";

const PaymentFund = () => {
  const [sourceBank, setSourceBank] = useState("");
  const [transferNote, setTransferNote] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientAccountNumber, setRecipientAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = () => {
    // Handle payment logic here, send data to a backend API
    console.log("Payment data:", {
      sourceBank,
      transferNote,
      recipientEmail,
      recipientAccountNumber,
      amount,
    });
  };

  return (
    <>
      <section className="payment">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <h2 className="mt-4">Payment Transfer</h2>
              <p className="mb-4">
                Please provide any specific details or notes related to the
                payment
              </p>
              <div className="divider"></div>
              <div className="row">
                <div className="col-md-12">
                  <h4 className="mt-1">Transfer Details</h4>
                  <p className="mb-4">Enter the details of the recipient</p>
                  <div className="divider1"></div>
                  <div className="mb-2">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label htmlFor="sourceBank" className="form-label">
                        Select Bank
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="sourceBank"
                        placeholder="Select the bank account"
                        value={sourceBank}
                        onChange={(e) => setSourceBank(e.target.value)}
                        style={{ marginRight: "10px" }} // Add some spacing between input and label
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label htmlFor="transferNote" className="form-label">
                        Payment Note (Optional)
                      </label>

                      <textarea
                        className="form-control"
                        id="transferNote"
                        placeholder="Please provide any additional information or instructions related to the payment"
                        value={transferNote}
                        onChange={(e) => setTransferNote(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider "></div>
              <div className="row">
                <div className="col-md-12">
                  <h4 className="mt-1">Bank Account Details</h4>
                  <p className="mb-4">
                    Enter the bank account details of the recipient
                  </p>
                  <div className="divider1"></div>
                  <div className="mb-2">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label htmlFor="recipientEmail" className="form-label">
                        Recipients Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="recipientEmail"
                        placeholder="Enter recipient's email"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label
                        htmlFor="recipientAccountNumber"
                        className="form-label"
                      >
                        Recipients Bank Account Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipientAccountNumber"
                        placeholder="Enter account number"
                        value={recipientAccountNumber}
                        onChange={(e) =>
                          setRecipientAccountNumber(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label htmlFor="amount" className="form-label">
                        Amount
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="amount"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="btn1">
                    <button
                      className="btn btn-primary mb-3"
                      onClick={handlePayment}
                    >
                      Make Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentFund;
