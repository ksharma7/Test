//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "EF Domain Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.Services.Entities
{
    public class PersonJsonConfig : IEntityTypeConfiguration<PersonJson>
    {
        public void Configure(EntityTypeBuilder<PersonJson> c)
        {
            c.ToTable("Person_json", "Person")
             .HasKey(e => e.PersonId);

            // configure properties
          
            c.Property(e => e.PersonId)
             .HasColumnName("PersonID")
             .HasColumnType("int")
             .IsRequired()
             .ValueGeneratedOnAdd();

            c.Property(e => e.PersonType)
             .HasColumnName("PersonType")
             .HasColumnType("nchar")
             .HasMaxLength(2)
             .IsUnicode()
             .IsFixedLength()
             .IsRequired();

            c.Property(e => e.NameStyle)
             .HasColumnName("NameStyle")
             .HasColumnType("bit")
             .IsRequired();

            c.Property(e => e.Title)
             .HasColumnName("Title")
             .HasColumnType("nvarchar")
             .HasMaxLength(8)
             .IsUnicode();

            c.Property(e => e.FirstName)
             .HasColumnName("FirstName")
             .HasColumnType("nvarchar")
             .HasMaxLength(50)
             .IsUnicode()
             .IsRequired();

            c.Property(e => e.MiddleName)
             .HasColumnName("MiddleName")
             .HasColumnType("nvarchar")
             .HasMaxLength(50)
             .IsUnicode();

            c.Property(e => e.LastName)
             .HasColumnName("LastName")
             .HasColumnType("nvarchar")
             .HasMaxLength(50)
             .IsUnicode()
             .IsRequired();

            c.Property(e => e.Suffix)
             .HasColumnName("Suffix")
             .HasColumnType("nvarchar")
             .HasMaxLength(10)
             .IsUnicode();

            c.Property(e => e.EmailPromotion)
             .HasColumnName("EmailPromotion")
             .HasColumnType("int")
             .IsRequired();

            c.Property(e => e.AdditionalContactInfo)
             .HasColumnName("AdditionalContactInfo")
             .HasColumnType("nvarchar(max)")
             .IsUnicode();

            c.Property(e => e.Demographics)
             .HasColumnName("Demographics")
             .HasColumnType("nvarchar(max)")
             .IsUnicode();

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