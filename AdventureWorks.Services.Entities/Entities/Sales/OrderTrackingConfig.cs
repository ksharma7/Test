//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "EF Domain Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.Services.Entities
{
    public class OrderTrackingConfig : IEntityTypeConfiguration<OrderTracking>
    {
        public void Configure(EntityTypeBuilder<OrderTracking> c)
        {
            c.ToTable("OrderTracking", "Sales")
             .HasKey(e => e.OrderTrackingId);

            // configure properties
          
            c.Property(e => e.OrderTrackingId)
             .HasColumnName("OrderTrackingID")
             .HasColumnType("int")
             .IsRequired()
             .ValueGeneratedOnAdd();

            c.Property(e => e.SalesOrderId)
             .HasColumnName("SalesOrderID")
             .HasColumnType("int")
             .IsRequired();

            c.Property(e => e.CarrierTrackingNumber)
             .HasColumnName("CarrierTrackingNumber")
             .HasColumnType("nvarchar")
             .HasMaxLength(25)
             .IsUnicode();

            c.Property(e => e.TrackingEventId)
             .HasColumnName("TrackingEventID")
             .HasColumnType("int")
             .IsRequired();

            c.Property(e => e.EventDetails)
             .HasColumnName("EventDetails")
             .HasColumnType("nvarchar")
             .HasMaxLength(2000)
             .IsUnicode()
             .IsRequired();

            c.Property(e => e.EventDateTime)
             .HasColumnName("EventDateTime")
             .HasColumnType("datetime2")
             .IsRequired();

        }
    }
}