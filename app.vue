<template>
	<Container>
		<Navbar />
		<main>
			<NuxtPage />
		</main>
		<MailModal cont="Hello there!" />
	</Container>
</template>

<style scoped>
main {
	width: 80%;
	padding: 0 20px;
}
</style>
