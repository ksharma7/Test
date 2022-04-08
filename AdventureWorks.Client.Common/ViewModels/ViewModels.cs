//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "View Models" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

using Microsoft.Extensions.DependencyInjection;

namespace AdventureWorks.Client.ViewModels
{
    public static class ViewModels
    {
        public static IServiceCollection AddViewModels(this IServiceCollection services)
        {
            services.AddTransient<LoginViewModel, LoginViewModel>();
            services.AddTransient<CustomerListViewModel, CustomerListViewModel>();
            services.AddTransient<SalesOrderViewModel, SalesOrderViewModel>();
            services.AddTransient<SalesOrderListViewModel, SalesOrderListViewModel>();
            services.AddTransient<SalesOrderDetailViewModel, SalesOrderDetailViewModel>();
            return services;
        }
    }
}