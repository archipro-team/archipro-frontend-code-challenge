export class UserMockBuilder {
  id = "5bbc096e0a1a86926701399e";
  name = "Debbie Reeves";
  email = "debbiereeves@zanymax.com";
  phone = "+1 (884) 499-2588";

  build() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
    };
  }

  withId(id) {
    this.id = id;
    return this;
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withEmail(email) {
    this.email = email;
    return this;
  }

  withPhone(phone) {
    this.phone = phone;
    return this;
  }
}
