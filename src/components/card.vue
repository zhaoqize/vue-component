<style lang="css">
    .card {
        margin: .625rem .9375rem;
        border-radius: 1px;
        box-shadow: 0 1px 2px rgba(0,0,0,.3);
        background: #fff;
        color: #333;
    }
    .card-header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: .5rem .5rem;
        border-bottom: 1px solid #eee;
    }
    .card-body {
        padding: 0.5rem .5rem;
        line-height: 1.6;
    }
    .card-footer {
        border-top: 1px solid #eee;
        color: #888;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: .5rem .5rem;
    }
</style>
<template>
    <div class="card">
        <div class="card-header" v-if="hasHeader" @click.prevent="headerClick">
            <slot name="header">论语</slot>
        </div>
        <div class="card-body" v-if="hasBody" @click.prevent="bodyClick">
            <slot name="body">微子去之，箕子为之奴，比干谏而死。孔子曰：“殷有三仁焉。”柳下惠为士师，三黜。人曰：“子未可以去乎？”</slot>
        </div>
        <div  class="card-footer" v-if="hasFooter" @click.prevent="footerClick">
            <slot name="footer">孔子</slot>
        </div>
    </div>
</template>
<script>
    export default {
      props: {
        hasHeader: {
          type: Boolean,
          required: false,
          default: true
        },
        hasBody: {
          type: Boolean,
          equired: false,
          default: true
        },
        hasFooter: {
          type: Boolean,
          required: false,
          default: true
        }
      },
      methods: {
        headerClick () {
          this.$emit('header-click');
        },
        bodyClick () {
          this.$emit('body-click');
        },
        footerClick () {
          this.$emit('footer-click');
        }
      }
    };
</script>