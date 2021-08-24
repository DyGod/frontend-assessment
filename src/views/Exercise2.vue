<template>
  <div class="container">
    <header>
      <h1>Exercise 2</h1>
    </header>
    <section class="selections my-5">
      <div class="tabber d-none d-md-block">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item" v-for="(section,index) in sections" :key="index">
            <a
              class="nav-link"
              :class="{active: selected == index }"
              aria-current="page"
              @click.prevent="selected = index"
            >{{ section.title }}</a>
          </li>
        </ul>
        <div class="tabber__content py-4" v-if="sections">
          <h4>{{ sections[selected].title }}</h4>
          <div v-html="sections[selected].content"></div>
        </div>
      </div>

      <div class="accordion d-md-none" id="accordion-section">
        <div class="accordion-item" v-for="(section,index) in sections" :key="index">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              :class="{collapsed: selected != index}"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#accordion-${index}`"
              :aria-controls="`accordion-${index}`"
            >{{ section.title }}</button>
          </h2>
          <div
            :id="`accordion-${index}`"
            class="accordion-collapse collapse"
            :class="{show: selected == index}"
            aria-labelledby="headingOne"
            data-bs-parent="#accordion-section"
          >
            <div class="accordion-body">
              <h4>{{ section.title }}</h4>
              <div v-html="section.content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="banana my-5">
      <h3>Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.</h3>
      <div>
        <ul class="list-group">
          <li class="list-group-item">
            First we check,
            <kbd>('b' + 'a' + + 'a' + 'a')</kbd> which is equivalent to
            <kbd>'b' + 'a' + (+'a') + 'a'</kbd> or
            <kbd>baNaNa</kbd>
          </li>
          <li class="list-group-item">
            <div>
              This is a concatenation of
              <code>Char</code> with an addition of
              <kbd>(+'a')</kbd>
            </div>
            <div>
              The
              <kbd>+</kbd> is called a
              <strong>Unary operator</strong>. which converts its operand
              <code>'a'</code> to Number type.
            </div>
          </li>
          <li class="list-group-item">
            <div>
              Although,
              <code>'a'</code> cannot be converted which results to
              <kbd>NaN</kbd>
            </div>
            <div>
              NaN or
              <code>Not A Number</code>
            </div>
          </li>
          <li class="list-group-item">
            Now convert
            <kbd>(baNaNa)</kbd>
            .toLowerCase() which turns a string to all lowercase letters
            results in to
            <kbd>banana</kbd>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import jsonData from "../assets/data.json";
export default {
  data() {
    return {
      sections: jsonData,
      selected: 0
    };
  }
};
</script>

<style scoped>
.tabber__content {
  border: 1px solid black;
  border-radius: 5px;
  padding: 25px;
}
</style>