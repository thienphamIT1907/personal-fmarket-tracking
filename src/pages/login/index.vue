<template>
  <div class="min-h-screen flex">
    <!-- Left Column - Hero Section -->
    <div
      class="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600"
    >
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style="
          background-image: url('https://images.unsplash.com/photo-1751104486292-e35ffb54b336?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        "
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-slate-800/40" />

      <!-- Content -->
      <div
        class="relative z-10 flex flex-col justify-between p-8 lg:p-12 text-white w-full"
      >
        <!-- Header -->
        <div class="flex justify-between items-start">
          <div class="flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-xl"
            >
              <span class="text-black font-bold text-sm">FT</span>
            </div>
            <span class="text-xl font-semibold shadow-md"
              >Fmarket Tracking</span
            >
          </div>

          <div class="flex items-center space-x-1 text-sm">
            <span>English</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col justify-center max-w-md">
          <h1 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Fleets are the bridge that brings us together.
          </h1>
          <p class="text-lg text-slate-200 leading-relaxed">
            We believe that all commercial vehicles deserve easy access to
            world-class fleet management solutions.
          </p>
        </div>
      </div>
    </div>

    <!-- Right Column - Login Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
      <div class="w-full max-w-md space-y-8">
        <!-- Mobile Logo -->
        <div class="lg:hidden flex items-center justify-center space-x-2 mb-8">
          <div
            class="w-8 h-8 bg-slate-800 rounded flex items-center justify-center"
          >
            <svg
              class="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="text-xl font-semibold text-slate-800">LogoIpsum</span>
        </div>

        <!-- Login Header -->
        <div class="text-center lg:text-left">
          <h2 class="text-3xl font-bold text-slate-900 mb-2">Login</h2>
          <p class="text-slate-600">
            Welcome back! Please enter your email id and password
          </p>
        </div>
        <FormLogin />
      </div>
    </div>
  </div>
</template>

<script setup>
  // const email = ref('');
  // const password = ref('');
  // const showPassword = ref(false);

  // const togglePassword = () => {
  //   showPassword.value = !showPassword.value;
  // };

  // const handleLogin = () => {
  //   // Handle login logic here
  //   console.log('Login attempt:', {
  //     email: email.value,
  //     password: password.value,
  //   });
  // };
</script>
