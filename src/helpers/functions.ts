export const stripRouteName = (route: string) => {
	if(route.includes('-')) {
		const routeName = route.split('-');
		return routeName.join(' ');
	}
	return route;
}