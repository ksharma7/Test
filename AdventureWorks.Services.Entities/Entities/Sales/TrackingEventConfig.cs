//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "EF Domain Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.Services.Entities
{
    public class TrackingEventConfig : IEntityTypeConfiguration<TrackingEvent>
    {
        public void Configure(EntityTypeBuilder<TrackingEvent> c)
        {
            c.ToTable("TrackingEvent", "Sales")
             .HasKey(e => e.TrackingEventId);

            // configure properties
          
            c.Property(e => e.TrackingEventId)
             .HasColumnName("TrackingEventID")
             .HasColumnType("int")
             .IsRequired()
             .ValueGeneratedOnAdd();

            c.Property(e => e.EventName)
             .HasColumnName("EventName")
             .HasColumnType("nvarchar")
             .HasMaxLength(255)
             .IsUnicode()
             .IsRequired();

        }
    }
}