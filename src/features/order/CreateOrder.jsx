import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const cart = fakeCart;

  const formError = useActionData();

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="post">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="sm:w-40 sm:basis-40">First Name</label>
          <input type="text" name="customer" required className="input grow" />
        </div>

        <div className="align-center mb-5 flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="sm:w-40 sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formError?.phone && (
              <p
                className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700"
                style={{ color: "red" }}
              >
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="sm:w-40 sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-5 flex items-center gap-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing the Order..." : "Order now"}
          </Button>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  // Creating errors object to store any validation errors. If there are any errors, we return the errors object, which will be available in the component as a prop. We can then use this prop to display the error messages to the user.
  const errors = {};
  // checking if the phone number is valid or not.
  if (!isValidPhone(order.phone)) {
    errors.phone = "Please enter a valid phone number";
  }
  // checking if the error object is empty or not.
  if (Object.keys(errors).length > 0) return errors;

  // createOrder is a function that makes a POST request to the API to create a new order. It takes the order object as an argument and returns the new order data if the request is successful. If the request fails, it throws an error with a message that can be displayed to the user.

  // const newOrder = await createOrder(order);
  // console.log(newOrder);

  // return redirect(`/order/${newOrder.id}`);
  return null;
}

export default CreateOrder;
