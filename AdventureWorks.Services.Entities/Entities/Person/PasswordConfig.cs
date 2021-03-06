//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "EF Domain Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.Services.Entities
{
    public class PasswordConfig : IEntityTypeConfiguration<Password>
    {
        public void Configure(EntityTypeBuilder<Password> c)
        {
            c.ToTable("Password", "Person")
             .HasKey(e => e.BusinessEntityId);

            // configure relationships

            c.HasOne(e => e.BusinessEntityObject)
             .WithOne()
             .HasForeignKey<Password>(e => e.BusinessEntityId);

            // configure properties
          
            c.Property(e => e.BusinessEntityId)
             .HasColumnName("BusinessEntityID")
             .HasColumnType("int")
             .IsRequired()
             .ValueGeneratedNever();

            c.Property(e => e.PasswordHash)
             .HasColumnName("PasswordHash")
             .HasColumnType("varchar")
             .HasMaxLength(128)
             .IsRequired();

            c.Property(e => e.PasswordSalt)
             .HasColumnName("PasswordSalt")
             .HasColumnType("varchar")
             .HasMaxLength(10)
             .IsRequired();

            c.Property(e => e.Rowguid)
             .HasColumnName("rowguid")
             .HasColumnType("uniqueidentifier")
             .IsRequired();

            c.Property(e => e.ModifiedDate)
             .HasColumnName("ModifiedDate")
             .HasColumnType("datetime")
             .IsRequired();

        }
    }
}