export default  {
  methods: {
    toEndScroll() {
      console.warn('Need to fuck somebody!')
    },
    isScroll(event){
      const container = event.target;
      if(container.clientHeight + container.scrollTop >= container.scrollHeight){
        this.toEndScroll();
      }else {
        this.toTopScroll();
      }
    }
  }
}
