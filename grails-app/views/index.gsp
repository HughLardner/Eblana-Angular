<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>Welcome to Eblana</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <asset:stylesheet src="application.css"/>

	<base href="/">
</head>

<body ng-app="app">
	
	<header>
	</header
    <!-- MAIN CONTENT AND INJECTED VIEWS -->
    <div id="main">
		<div ui-view></div>
    </div>
	<!-- build:js(.) scripts/vendor.js -->
    <!-- bower:js -->
    <asset:javascript src="/jquery/jquery.js" />
    <asset:javascript src="/app.module.js" />
    <asset:javascript src="/angular/angular-animate.js"/>
    <asset:javascript src="/angular/angular-aria.js"/>
    <asset:javascript src="/angular/angular-cookies.js"/>
    <asset:javascript src="/angular/angular-messages.js"/>
	<asset:javascript src="/angular/angular-resource.js"/>
  	<asset:javascript src="/angular/angular-route.js"/>
   	<asset:javascript src="/angular/angular-sanitize.js"/>
    <asset:javascript src="/angular/angular-touch.js"/>
    <asset:javascript src="/angular/angular-ui-router.js"/>
    <asset:javascript src="/ng-fi-text/ng-fi-text.js"/>
    <asset:javascript src="/angular-smart-table/smart-table.js"/>
    
    <!-- Internals -->
    <asset:javascript src="/core/internals/internals.module.js"/>
    
    <!-- Load Logger first! -->
    <asset:javascript src="/core/internals/logger/logger.module.js"/>
    <asset:javascript src="/core/internals/logger/logger.factory.js"/>
    <asset:javascript src="/core/internals/exception/exception.module.js"/>
    <asset:javascript src="/core/internals/exception/exception-handler.provider.js"/>
    <asset:javascript src="/core/internals/exception/exception.factory.js"/>
    <asset:javascript src="/core/internals/router/router.module.js"/>
    <asset:javascript src="/core/internals/router/router-helper.provider.js"/>
    
    <!-- =========================================================== -->
    <!-- Core modules -->
    <asset:javascript src="/core/core.module.js"/>
    <asset:javascript src="/core/core.constants.js"/>
    

    <!-- =========================================================== -->
    <!-- Shared modules -->
    <asset:javascript src="/shared/shared.module.js"/>

    <!-- Spinner -->
    <asset:javascript src="/shared/spinner/spinner.module.js"/>
    <asset:javascript src="/shared/spinner/spinner.directive.js"/>


    <!-- =========================================================== -->
    <!-- Components -->
    <asset:javascript src="/components/components.module.js"/>

    <!-- Welcome -->
    <asset:javascript src="/components/welcome/welcome.module.js"/>
    <asset:javascript src="/components/welcome/welcome.routes.js"/>
    <asset:javascript src="/components/welcome/welcome.controller.js"/>
    <!-- Minor -->
    <asset:javascript src="/components/minor/minor.module.js"/>
    <asset:javascript src="/components/minor/minor.controller.js"/>
    <!-- Character -->
    <asset:javascript src="/components/character/character.module.js"/>
    <asset:javascript src="/components/character/character.routes.js"/>
    <asset:javascript src="/components/character/character.controller.js"/>
    <!-- User -->
    <asset:javascript src="/components/user/user.module.js"/>
    <asset:javascript src="/components/user/user.routes.js"/>
    <asset:javascript src="/components/user/user.controller.js"/>
    <!-- Downtime -->
    <asset:javascript src="/components/downtime/downtime.module.js"/>
    <asset:javascript src="/components/downtime/downtime.routes.js"/>
    <asset:javascript src="/components/downtime/downtime.controller.js"/>
    <!-- Item -->
    <asset:javascript src="/components/item/item.module.js"/>
    <asset:javascript src="/components/item/item.routes.js"/>
    <asset:javascript src="/components/item/item.controller.js"/>
    <!-- Item -->
    <asset:javascript src="/components/recipe/recipe.module.js"/>
    <asset:javascript src="/components/recipe/recipe.controller.js"/>
</body>
</html>
