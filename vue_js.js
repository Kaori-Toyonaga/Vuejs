new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {
    name: 'A山B郎',
    course: 'Webエンジニアコース',
    acceptancePeriod: '2019年01月期',
    defaultLastId: 3,
    students: [
      { id: 1, name: '野呂浩良', course: '機械学習コース', acceptancePeriod: '2019年01月期' },
      { id: 2, name: '富永修司', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: '斉藤一起', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
    ]
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent: function() {
        // この function() { } の中にaddStudentメソッド
        // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く

        // 取得する値を定義
        const {
          name,
          course,
          acceptancePeriod,
        } = this;
        const id = this.students.length + 1;
        // const name = this.name;
        // const course = this.course;
        // const acceptancePeriod = this.acceptancePerioe;

        // 値の取得
        console.log(id);
        console.log(name);
        console.log(course);
        console.log(acceptancePeriod);

        // 値の表示(push）
        this.students.push({
          id,
          name,
          course,
          acceptancePeriod,
        });

        this.name = ""
        this.course = ""
        this.acceptancePeriod = ""

    }
  }
})
