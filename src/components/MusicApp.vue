<template>
  <div class="musicContainer">
    <div class="search-gana">
      <span class="fa fa-search"></span>
      <input
        class="search-music"
        type="text"
        placeholder="search..."
        @keypress="fetchMusic"
        v-model="musicSearch"
      />
    </div>
    <div class="album-image">
      <img :src="url" alt="" />
    </div>
    <hr class="divider" />
    <div class="song-description">
      <p class="description">{{ songs.name }}</p>
    </div>
    <div class="media-buttons">
      <button class="previous" @click="previous">⏪</button>
      <button class="play" @click="play">⏯</button>
      <button class="next" @click="next">⏩</button>
    </div>
    <hr class="divider" />
    <div class="song-list">
      <ul v-for="(songs, id) in songs" :key="id">
        <li class="songs">{{ songs.id }}</li>
      </ul>
    </div>
  </div>
</template>
<script scoped>
export default {
  data: function () {
    return {
      Api_key: "6rqhFgbbKwnb9MLmUQDhG6",
      url_base: "https://api.spotify.com/v1",
      musicSearch: "",
      songs: [],
    };
  },
  methods: {
    previous() {
      this.songs = this.songs.length - 1;
    },
    play() {
      this.songs;
    },
    next() {
      this.songs = this.songs.length;
    },
    fetchMusic(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}&?q=${this.musicSearch}&sortBy=Album&apiKey=${this.Api_key}`
        )
          .then((res) => {
            res.json();
          })
          .then(this.setResult);
      }
    },
    setResult(result) {
      this.songs = result.albums;
    },
  },
};
</script>
<style scoped>
.musicContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 0px;
  margin-top: 35px;
  width: 467px;
  height: 650px;
  border-radius: 1px 46px 1px 46px;
  box-shadow: 0px 14px 40px 3px;
  background-image: url("https://cliply.co/wp-content/uploads/2021/07/402107330_WHITE_WAVES_400px.gif");
  background-repeat: no-repeat;
  background-size: cover;
}
.search-gana {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 275px;
  height: 34px;
  border: 1px groove;
  border-radius: 13px;
  margin-top: 23px;
  box-shadow: 1px 11px 57px -5px black;
  background: transparent;
}
.fa-search {
  margin-left: 10px;
}
.search-music {
  border: 0px;
  width: 275px;
  height: 34px;
  background: transparent;
  border-radius: 13px;
  border: 0px;
  text-align: center;
}
.album-image {
  border: 1px groove;
  width: 316px;
  height: 221px;
  margin-top: 30px;
  border-radius: 18px;
  box-shadow: 1px 11px 57px -5px black;
}
.divider {
  height: 2px;
  width: 419px;
  border-radius: 22px;
  background: black;
  margin-top: 28px;
  opacity: 0.5;
}
.description {
  font-family: cursive;
  font-size: 23px;
  color: black;
  text-shadow: -1px 2px 10px #ff0099;
  margin: 0px;
  padding: 0px;
}
.media-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 23px;
}
.previous {
  margin-right: 82px;
  height: 51px;
  width: 64px;
  border-radius: 19px;
  border: 0px;
  box-shadow: 1px 11px 57px -5px black;
  background: transparent;
}
.play {
  margin-right: 74px;
  height: 51px;
  width: 64px;
  border-radius: 19px;
  border: 0px;
  box-shadow: 1px 11px 57px -5px black;
  background: transparent;
}
.next {
  height: 51px;
  width: 64px;
  border-radius: 19px;
  border: 0px;
  box-shadow: 1px 11px 57px -5px black;
  background: transparent;
}
.songs-list {
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  margin-left: -10px;
}
.songs {
  display: flex;
  text-align: center;
  font-family: monospace;
  font-size: 25px;
  color: white;
  margin-right: 50px;
}
</style>
