import clientFilter from './filter';

describe('clientFilter', () => {
  const clients = [
    { name: 'abcd', email: 'aa@bb.com', phone: '+1-021875' },
    { name: 'jack', email: 'jack@gmail.com', phone: '+1-872002' }
  ];
  it('filter out clients by name', () => {
    expect(clientFilter(clients, { name: 'bcd' })).toHaveLength(1);
    expect(clientFilter(clients, { name: 'BCD' })).toHaveLength(1);
    expect(clientFilter(clients, { name: 'apple' })).toHaveLength(0);
  });
  it('filter out clients by email', () => {
    expect(clientFilter(clients, { email: 'jack' })).toHaveLength(1);
    expect(clientFilter(clients, { email: 'JACk' })).toHaveLength(1);
    expect(clientFilter(clients, { email: '@' })).toHaveLength(2);
    expect(clientFilter(clients, { email: 'banana' })).toHaveLength(0);
  });
  it('filter out clients by phone', () => {
    expect(clientFilter(clients, { phone: '0218' })).toHaveLength(1);
    expect(clientFilter(clients, { phone: '7800' })).toHaveLength(0);
  });
  it('filter out clients by name, email, and phone', () => {
    expect(
      clientFilter(clients, { name: 'Jack', email: 'gmail.com', phone: '872' })
    ).toHaveLength(1);
    expect(
      clientFilter(clients, { name: 'jack', email: 'bb.com', phone: '872' })
    ).toHaveLength(0);
  });
});
