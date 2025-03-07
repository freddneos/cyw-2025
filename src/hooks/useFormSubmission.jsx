import { useState } from 'preact/hooks';

export function useFormSubmission(shouldRedirect = true) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the webhook
    fetch('https://hook.eu2.make.com/xj4vme7v1755clooambuaheh8tht829h', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone }),
    });

    setIsSubmitted(true);
    setEmail('');
    setName('');
    setPhone('');
    // Redirect to Stripe payment page
    if (shouldRedirect) {
      redirectToStripe(email);
    }
  }

  return {
    email,
    setEmail,
    name,
    setName,
    phone,
    setPhone,
    isSubmitted,
    setIsSubmitted,
    handleSubmit,
  };
}

function redirectToStripe(email) {
    window.location.href = `https://buy.stripe.com/9AQeWx1875LPgPm7ss?prefilled_email=${email}`;
}