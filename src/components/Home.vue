<template>
  <main>
    <div class="card">
      <h1>Random Quote</h1>
      <div class="card__quote">{{ quoteData.quoteText }}</div>
      <div class="card__author">{{ quoteData.quoteAuthor }}</div>
      <div class="card__button">
        <button v-on:click="newQuote" class="btn btn__primary">
          Get Quote
        </button>
      </div>
      <div>
        <div id="copyright" class="credits">
          &#169; {{ new Date().getFullYear() }}
          <span
            >Created by Chuck Smith -
            <a
              href="https://eclecticsaddlebag.com"
              target="_blank"
              rel="noreferrer nofollow"
              >Blog</a
            >
            -
            <a
              href="https://chucksmith.dev"
              target="_blank"
              rel="noreferrer nofollow"
              >Portfolio</a
            > </span
          ><br />
          <span class="credits">
            <a
              href="https://twitter.com/EclecticCoding"
              target="_blank"
              rel="noopener nofollow"
            >
              Twitter
            </a>
            |
            <a
              href="https://www.linkedin.com/in/dev-chuck-smith/"
              target="_blank"
              rel="noopener nofollow"
              >LinkedIn</a
            >
            |
            <a
              href="https://github.com/eclectic-coding"
              target="_blank"
              rel="noopener nofollow"
              >GitHub</a
            >
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import QuoteService from "../services/QuoteService";

export default {
  name: "Home",
  data() {
    return {
      quoteData: [],
    };
  },
  methods: {
    newQuote: function () {
      QuoteService.getQuote()
        .then((response) => {
          this.quoteData = response.data.quote;
        })
        .catch((error) => {
          console.log("These was an error:" + error);
        });
    },
  },
  created() {
    this.newQuote();
  },
};
</script>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background-color: white;
  padding: 1rem 3rem;
  width: 75vw;
  margin: 0 auto;
  border-radius: 10px;

  &__quote {
    padding: 2rem;
  }

  &__author {
    text-align: right;
    padding-right: 5rem;
    font-style: italic;
  }

  &__button {
    text-align: center;
  }
}

.credits {
  color: #666363;
  padding: 3rem 0 0;
  text-align: center;
}

.btn {
  margin: 1rem 0 2rem;
  padding: 12px 24px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 5px;

  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;

    //Change for the <button> element
    border: none;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(black, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &__primary {
    background-color: #b42326;
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  &-animated {
    animation: moveInBottom 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }
}
</style>
