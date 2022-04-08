//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "EF Domain Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.Services.Entities
{
    public class UnitMeasureConfig : IEntityTypeConfiguration<UnitMeasure>
    {
        public void Configure(EntityTypeBuilder<UnitMeasure> c)
        {
            c.ToTable("UnitMeasure", "Production")
             .HasKey(e => e.UnitMeasureCode);

            // configure properties
          
            c.Property(e => e.UnitMeasureCode)
             .HasColumnName("UnitMeasureCode")
             .HasColumnType("nchar")
             .HasMaxLength(3)
             .IsUnicode()
             .IsFixedLength()
             .IsRequired();

            c.Property(e => e.Name)
             .HasColumnName("Name")
             .HasColumnType("nvarchar")
             .HasMaxLength(50)
             .IsUnicode()
             .IsRequired();

            c.Property(e => e.ModifiedDate)
             .HasColumnName("ModifiedDate")
             .HasColumnType("datetime")
             .IsRequired();

        }
    }
}