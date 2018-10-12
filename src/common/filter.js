const clientFilter = (clients, { name, email, phone }) => {
  let _clients = [...clients];
  if (name) {
    _clients = _clients.filter(c => c.name.search(new RegExp(name, 'i')) >= 0);
  }
  if (email) {
    _clients = _clients.filter(
      c => c.email.search(new RegExp(email, 'i')) >= 0
    );
  }
  if (phone) {
    _clients = _clients.filter(c => c.phone.includes(phone));
  }
  return _clients;
};

export default clientFilter;
