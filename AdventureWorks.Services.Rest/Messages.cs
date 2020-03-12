using System;
using System.Resources;

namespace AdventureWorks.Services.Rest
{
    /// <summary>
    /// Message codes, as well as a resource manager to get a (localized) message text for those.
    /// </summary>
    public static class Messages
    {
        private static readonly Lazy<ResourceManager> resourceManager =
            new Lazy<ResourceManager>(() => new ResourceManager("AdventureWorks.Services.Rest.Resources", typeof(Messages).Assembly));

        /// <summary>
        /// Resource manager for the current messages.
        /// </summary>
        public static ResourceManager ResourceManager
        {
            get { return resourceManager.Value; }
        }

        /// <summary>
        /// Lookup table '{0}' is not found in the global lookup cache.
        /// Where {0}=Lookup table name
        /// </summary>
        public const string LookupTableNotFound = "LookupTableNotFound";
    }
}
