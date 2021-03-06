//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "EF Domain Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.Services.Entities
{
    public class ProductPhotoConfig : IEntityTypeConfiguration<ProductPhoto>
    {
        public void Configure(EntityTypeBuilder<ProductPhoto> c)
        {
            c.ToTable("ProductPhoto", "Production")
             .HasKey(e => e.ProductPhotoId);

            // configure properties
          
            c.Property(e => e.ProductPhotoId)
             .HasColumnName("ProductPhotoID")
             .HasColumnType("int")
             .IsRequired()
             .ValueGeneratedOnAdd();

            c.Property(e => e.ThumbNailPhoto)
             .HasColumnName("ThumbNailPhoto")
             .HasColumnType("varbinary(max)");

            c.Property(e => e.ThumbnailPhotoFileName)
             .HasColumnName("ThumbnailPhotoFileName")
             .HasColumnType("nvarchar")
             .HasMaxLength(50)
             .IsUnicode();

            c.Property(e => e.LargePhoto)
             .HasColumnName("LargePhoto")
             .HasColumnType("varbinary(max)");

            c.Property(e => e.LargePhotoFileName)
             .HasColumnName("LargePhotoFileName")
             .HasColumnType("nvarchar")
             .HasMaxLength(50)
             .IsUnicode();

            c.Property(e => e.ModifiedDate)
             .HasColumnName("ModifiedDate")
             .HasColumnType("datetime")
             .IsRequired();

        }
    }
}