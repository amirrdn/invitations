<template>
  <div class="ww-section ww-rsvp-detail" id="rsvp">
    <div class="container" data-aos="zoom-in-up" data-aos-duration="1000">
      <div class="col text-center">
        <h2 class="h1 ww-title pb-3" data-aos="zoom-in-down" data-aos-duration="1000">
          Give Your Comment
        </h2>
      </div>
      <div class="row ww-rsvp-form">
        <div class="col-md-10">
          <div class="card-body">
            <div class="container bootdey">
              <div class="col-md-12 bootstrap snippets">
                <div class="panel">
                  <div class="panel-body">
                    <textarea
                      class="form-control"
                      rows="2"
                      v-model="textreplays"
                      placeholder="What are you thinking?"
                    ></textarea>
                    <div class="mar-top clearfix">
                      <a
                        href="javascript:void(0)"
                        class="btn btn-sm btn-primary pull-right"
                        type="button"
                        :disabled="isloading"
                        @click="setCommentReplays(currentUser.id, 0)"
                      >
                        <i class="pi pi-share-alt" style="font-size: 12px"></i> Share
                      </a>
                      <a
                        class="btn btn-trans btn-icon fa fa-video-camera add-tooltip"
                        href="#"
                      ></a>
                      <a
                        class="btn btn-trans btn-icon fa fa-camera add-tooltip"
                        href="#"
                      ></a>
                      <a
                        class="btn btn-trans btn-icon fa fa-file add-tooltip"
                        href="#"
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="panel">
                  <div class="panel-body scrolls">
                    <!-- Newsfeed Content -->
                    <!--===================================================-->
                    <div class="media-block" v-for="(b, index) in comment" :keys="index">
                      <a class="media-left" href="#"
                        ><div class="img-circle img-sm rounded-circle">
                          {{ b.user_creator.substr(0, 2) }}
                        </div></a
                      >
                      <div class="media-body">
                        <div class="mar-btm">
                          <a
                            href="#"
                            class="btn-link text-semibold media-heading box-inline"
                            >{{ b.user_creator }}</a
                          >
                          <p class="text-muted text-sm">
                            <i class="fa fa-mobile fa-lg"></i> - From Mobile -
                            {{ moment(b.created_at).fromNow() }}
                          </p>
                        </div>
                        <p v-html="b.text"></p>
                        <div class="pad-ver">
                          <div class="btn-group">
                            <a class="btn btn-sm btn-default btn-hover-success" href="#"
                              ><i class="fa fa-thumbs-up"></i
                            ></a>
                            <a class="btn btn-sm btn-default btn-hover-danger" href="#"
                              ><i class="fa fa-thumbs-down"></i
                            ></a>
                          </div>
                          <a
                            class="btn btn-sm btn-default btn-hover-primary"
                            href="javascript:void(0)"
                            @click="getiscomment(b.id)"
                            >Comment</a
                          >
                        </div>
                        <div class="panel" v-if="iscomment == b.id">
                          <div class="panel-body">
                            <textarea
                              class="form-control"
                              rows="2"
                              placeholder="What are you thinking?"
                              v-model="textreplays"
                            ></textarea>
                            <div class="mar-top clearfix">
                              <button
                                class="btn btn-sm btn-primary pull-right"
                                type="button"
                                @click="setCommentReplays(b.user_id, b.id)"
                              >
                                <i class="pi pi-share-alt" style="font-size: 12px"></i>
                                Share
                              </button>
                              <a
                                class="btn btn-trans btn-icon fa fa-video-camera add-tooltip"
                                href="javascript:void(0)"
                                @click="iscomment = 0"
                              >
                                <i class="pi pi-times"></i>
                              </a>
                              <a
                                class="btn btn-trans btn-icon fa fa-camera add-tooltip"
                                href="#"
                              ></a>
                              <a
                                class="btn btn-trans btn-icon fa fa-file add-tooltip"
                                href="#"
                              ></a>
                            </div>
                          </div>
                        </div>

                        <!-- Comments -->
                        <template v-for="(c, ind) in commentreplay" :keys="ind">
                          <div>
                            <div class="media-block margin-20" v-if="c.parent == b.id">
                              <a class="media-left" href="#"
                                ><div class="img-circle img-sm rounded-circle">
                                  {{ c.user_creator.substr(0, 2) }}
                                </div></a
                              >
                              <div class="media-body">
                                <div class="mar-btm">
                                  <a
                                    href="#"
                                    class="btn-link text-semibold media-heading box-inline"
                                    >{{ c.user_creator }}</a
                                  >
                                  <p class="text-muted text-sm">
                                    <i class="fa fa-mobile fa-lg"></i> - From Mobile -
                                    {{ moment(c.created_at).fromNow() }}
                                  </p>
                                </div>
                                <p v-html="c.text"></p>
                                <!--
                                <div class="pad-ver">
                                  <div class="btn-group">
                                    <a
                                      class="btn btn-sm btn-default btn-hover-success active"
                                      href="#"
                                      ><i class="fa fa-thumbs-up"></i> You Like it</a
                                    >
                                    <a
                                      class="btn btn-sm btn-default btn-hover-danger"
                                      href="#"
                                      ><i class="fa fa-thumbs-down"></i
                                    ></a>
                                  </div>
                                  <a
                                    class="btn btn-sm btn-default btn-hover-primary"
                                    href="#"
                                    >Comment</a
                                  >
                                </div>
                                -->
                                <hr />
                              </div>
                            </div>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import authHeader from "../services/auth-header";
import axios from "axios";
import ScrollPanel from "primevue/scrollpanel";
import moment from "moment";
import io from "socket.io-client";

export default {
  components: {
    ScrollPanel,
  },
  data() {
    return {
      comment: [],
      commentreplay: [],
      moment: moment,
      iscomment: 0,
      socket: io(this.$server, {
        transports: ["websocket"],
      }),
      textreplays: null,
      isloading: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user.users;
    },
  },
  mounted() {
    this.getComment();
    let vm = this;
    this.socket.on("getComment", function (msg) {
      console.log(msg);
      vm.comment = [];
      vm.commentreplay = [];
      setTimeout(() => {
        msg.forEach((b) => {
          if (b.parent == 0) {
            console.log("null");
            vm.comment.push(b);
          } else {
            console.log("yesss");
            vm.commentreplay.push(b);
          }
        });
      }, 500);
      /*
      for (let i = 0; i < msg; i++) {
        console.log(msg[i].parent);
        if (msg[i].parent == 0) {
          this.comment.push(msg[i]);
        } else if (msg[i].parent !== 0) {
          this.commentreplay.push(msg[i]);
        }
      }
      */
    });
  },
  methods: {
    getiscomment(val) {
      this.iscomment = val;
    },
    setCommentReplays(user_to, parent) {
      this.isloading = true;
      this.socket.open();
      const data = {
        user_to: user_to,
        user_id: this.currentUser.id,
        text: this.textreplays,
        parent: parent,
      };
      axios
        .post(this.$api_url + "insert-comment", data, {
          headers: authHeader(),
        })
        .then((response) => {
          if (response.data == "Forbiden") {
            this.$store.dispatch("auth/logout");
          }
          this.iscomment = 0;
          this.isloading = false;
          this.textreplays = null;
        })
        .catch((error) => {
          this.isloading = false;
          if (error.message == "Request failed with status code 403") {
            this.$store.dispatch("auth/logout");
          }
          console.error(error);
        });
    },
    getComment() {
      const data = {};
      this.comment = [];
      this.commentreplay = [];
      axios
        .post(this.$api_url + "get-comment", data, {
          headers: authHeader(),
        })
        .then((response) => {
          if (response.data == "Forbiden") {
            this.$store.dispatch("auth/logout");
          }
          const getData = response.data;
          for (let i = 0; i < getData.length; i++) {
            if (getData[i].parent == 0) {
              this.comment.push(getData[i]);
            } else if (getData[i].parent !== 0) {
              this.commentreplay.push(getData[i]);
            }
          }
        });
    },
  },
};
</script>
