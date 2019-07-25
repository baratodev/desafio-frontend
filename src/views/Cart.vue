<template>
  <div class="container">
    <div class="cart">
      <form class="cart__form">
        <Heading text="Pagamentos" />
        <input type="text" placeholder="cartão" />
        <input type="text" placeholder="nome impresso" />
        <div class="input-group">
          <input type="text" placeholder="validade" />
          <input type="text" placeholder="codigo de seg." />
        </div>
        <button class="btn">Pagar</button>
      </form>
      <div>
        <Heading text="Resumo da Compra" />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";

export default {
  name: "cart",
  components: {
    Heading
  }
};
</script>


<style lang="scss" scoped>
.cart {
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  &__form {
    border-right: 1px solid var(--color-primary);
    padding-right: 40px;
    height: calc(100vh - 200px);

    .title {
      margin-bottom: 30px;
    }

    input {
      font-family: "Quicksand", sans-serif;
      color: var(--color-body);
      font-size: 1rem;
      padding: 15px;
      display: block;
      width: 100%;
      border-radius: 10px;
      border: 1px solid var(--color-input);
      margin-bottom: 15px;
      outline: none;
    }

    .input-group {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }

    .btn {
      margin-top: 45px;
    }
  }
}
</style>
