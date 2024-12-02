<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <h2>CRM System</h2>
    </div>

    <nav class="sidebar__nav">
      <NuxtLink to="/dashboard" class="nav-item">
        <i class="fas fa-home"></i>
        <span>Дашборд</span>
      </NuxtLink>

      <NuxtLink to="/clients" class="nav-item">
        <i class="fas fa-users"></i>
        <span>Клиенты</span>
      </NuxtLink>

      <NuxtLink to="/deals" class="nav-item">
        <i class="fas fa-handshake"></i>
        <span>Сделки</span>
      </NuxtLink>

      <NuxtLink to="/tasks" class="nav-item">
        <i class="fas fa-tasks"></i>
        <span>Задачи</span>
      </NuxtLink>

      <NuxtLink to="/analytics" class="nav-item">
        <i class="fas fa-chart-bar"></i>
        <span>Аналитика</span>
      </NuxtLink>

      <NuxtLink to="/settings" class="nav-item">
        <i class="fas fa-cog"></i>
        <span>Настройки</span>
      </NuxtLink>
    </nav>

    <div class="sidebar__user">
      <img
        src="https://via.placeholder.com/40"
        alt="User avatar"
        class="user-avatar"
      />
      <div class="user-info">
        <p class="user-name">Иван Иванов</p>
        <p class="user-role">Администратор</p>
      </div>
    </div>
  </aside>
</template>

<script setup>
// Здесь может быть логика компонента
</script>

<style scoped>
.sidebar {
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #2c3e50;
  color: #ecf0f1;
  height: 100vh;
  width: 250px;
  padding: 1rem;
}

.sidebar__logo {
  padding: 1rem 0;
  text-align: center;
  border-bottom: 1px solid #34495e;
}

.sidebar__logo h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #3498db;
}

.sidebar__nav {
  display: grid;
  gap: 0.5rem;
  padding: 1rem 0;
}

.nav-item {
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #ecf0f1;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.nav-item:hover {
  background-color: #34495e;
}

.nav-item i {
  font-size: 1.2rem;
}

.sidebar__user {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid #34495e;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-info {
  display: grid;
  gap: 0.25rem;
}

.user-name {
  margin: 0;
  font-weight: 600;
}

.user-role {
  margin: 0;
  font-size: 0.875rem;
  color: #95a5a6;
}

/* Активный пункт меню */
.router-link-active {
  background-color: #3498db;
}

.router-link-active:hover {
  background-color: #2980b9;
}
</style>
