document.getElementById('usernameInput').addEventListener('input', function() {
    const username = this.value;
    const errorMessage = document.getElementById('errorMessage');
    const userInfo = document.getElementById('userInfo');
    const userNameElement = document.getElementById('userName');
    const userStatsElement = document.getElementById('userStats');
    const userAvatar = document.getElementById('userAvatar');
    const viewProfile = document.getElementById('viewProfile');
    const reposContainer = document.getElementById('repos');

    if (username.length === 0) {
        userInfo.style.display = 'none';
        errorMessage.style.display = 'none';
        reposContainer.innerHTML = '';
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => {
            errorMessage.style.display = 'none';
            userInfo.style.display = 'flex';
            userAvatar.src = data.avatar_url;
            userNameElement.textContent = data.name || username; // 이름이 없으면 사용자명을 사용
            userStatsElement.innerHTML = `
                <p>Public Repos: ${data.public_repos}</p>
                <p>Public Gists: ${data.public_gists}</p>
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
                <p>Company: ${data.company || 'null'}</p>
                <p>Website/Blog: <a href="${data.blog}" target="_blank">${data.blog || 'null'}</a></p>
                <p>Location: ${data.location || 'null'}</p>
                <p>Member Since: ${data.created_at}</p>
            `;
            viewProfile.href = data.html_url; // 프로필 링크 설정

            // 최신 리포지토리 가져오기
            return fetch(data.repos_url);
        })
        .then(response => response.json())
        .then(repos => {
            reposContainer.innerHTML = ''; // 이전 리포지토리 초기화
            repos.forEach(repo => {
                const repoElement = document.createElement('div');
                repoElement.className = 'repo';
                repoElement.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>Stars: ${repo.stargazers_count}</p>
                    <p>Watchers: ${repo.watchers_count}</p>
                    <p>Forks: ${repo.forks_count}</p>
                `;
                reposContainer.appendChild(repoElement);
            });
        })
        .catch(error => {
            userInfo.style.display = 'none';
            errorMessage.style.display = 'block';
            reposContainer.innerHTML = ''; // 리포지토리 초기화
        });
});
