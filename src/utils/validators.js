export function checkLastName(name) {
  const errors = [];

  if (name.length === 0) {
    errors.push("Nom requis");
  }

  return errors;
}

export function checkFirstName(name) {
  const errors = [];

  if (name.length === 0) {
    errors.push("Prénom requis");
  }

  return errors;
}

export function checkEmail(email) {
  const errors = [];

  if (email.length === 0) {
    errors.push("E-mail requis");
  }

  if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    errors.push("L'e-mail renseigné n'est pas valide");
  }

  return errors;
}

export function checkMessage(message) {
  const errors = [];

  if (message.length === 0) {
    errors.push("Message requis");
  }

  return errors;
}
