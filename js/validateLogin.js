export function LoginValidation(form) {
  const phoneNumber = document.getElementById("phoneNumber").value.trim();

  // Validar que sea un número
  if (!/^\d+$/.test(phoneNumber)) {
    return false;
  }

  // Validar que tenga exactamente 10 dígitos
  if (phoneNumber.length !== 10) {
    return false;
  }

  // Validar que comience con 3
  if (!phoneNumber.startsWith("3")) {
    return false;
  }

  return true;
}
