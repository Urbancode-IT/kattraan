import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { capturePaymentService } from "@/services";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PaymentReturnPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paymentId = params.get("razorpay_payment_id");
  const orderId = params.get("razorpay_order_id");

  useEffect(() => {
    if (paymentId && orderId) {
      async function capturePayment() {
        try {
          const response = await capturePaymentService({
            paymentId,
            orderId,
          });

          if (response?.success) {
            sessionStorage.removeItem("currentOrderId");
            window.location.href = "/student-courses";
          } else {
            alert("Payment capture failed. Please contact support.");
          }
        } catch (error) {
          console.error("Error capturing payment:", error);
          alert("An error occurred while processing your payment.");
        }
      }

      capturePayment();
    }
  }, [orderId, paymentId]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Processing payment... Please wait</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default PaymentReturnPage;
