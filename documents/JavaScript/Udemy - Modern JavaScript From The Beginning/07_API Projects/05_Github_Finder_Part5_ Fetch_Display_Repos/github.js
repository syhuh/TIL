class GitHub {
  constructor() {
    this.client_id = 'feff5a8a456bb19d5291';
    this.client_secret = '7bfefc69e3042418691efea0777506d8947e15a1';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();


    return {
      profile,
      repos
    };
  }
}