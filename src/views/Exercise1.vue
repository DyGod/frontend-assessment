<template>
  <div>
    <header class="header">
      <div class="header__overlay"></div>
      <div class="header__content text-center text-light">
        <h1>{{ title }}</h1>
        <p>{{ subHeading }}</p>
      </div>
    </header>

    <section class="my-5 container">
      <div class="row gy-5">
        <div class="col-sm-12 col-md-6 col-lg-4" v-for="(content,ind) in contents" :key="ind">
          <div class="card h-100">
            <div class="card__image">
              <img :src="content.image" />
            </div>
            <div class="card-body">
              <p class="card-body__text">{{ content.description }}</p>
            </div>

            <div class="card__action my-3">
              <a href="#" class="btn btn-outline-dark btn-custom">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello Developer!",
      subHeading: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      contents: [
        {
          image: "http://via.placeholder.com/400x300",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
          image: "http://via.placeholder.com/400x300",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          image: "http://via.placeholder.com/400x300",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        }
      ]
    };
  }
};
</script>


<style scoped>
/* Header Styles */
.header {
  background-size: cover;
  background-position: center;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}

@media (max-width: 767.98px) {
  .header {
    background-image: url("http://via.placeholder.com/600x600");
    height: 600px;
  }
}

@media (min-width: 768px) {
  .header {
    background-image: url("http://via.placeholder.com/1920x650");
    height: 650px;
  }
}
/* Overlay for background image */
.header__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
/* Content font and z-index */
.header__content {
  z-index: 1;
  font-size: 2rem;
}

.header__content h1 {
  font-size: 5rem;
}

/* Card Styles */

.card {
  padding: 25px;
  text-align: center;
}
.card__image img {
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}
/* Custom Button Class */
.btn-custom {
  border-radius: 20px;
  font-weight: bolder;
  border-width: 2.5px;
}
</style>