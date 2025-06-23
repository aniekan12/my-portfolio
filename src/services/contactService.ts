export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<boolean> {
  try {
    const response = await fetch("https://formspree.io/f/xjkrardp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
}
