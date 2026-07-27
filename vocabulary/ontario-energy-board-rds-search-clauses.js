


var searchClauses = [
{InternalName: "recAclContainer",
Name: "aclContainer",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Enum",
        CanSort: false,
    Caption: "Access From Container"
}
,{InternalName: "recAccession",
Name: "accession",
        MethodGroup: "Reference",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Number",
        CanSort: true,
    Caption: "Accession Number"
}
,{InternalName: "unkAudit",
Name: "audit",
        MethodGroup: "Security",
        ObjectTypeParameter: "History",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Active Audit Event"
}
,{InternalName: "recActivity",
Name: "activity",
        MethodGroup: "Process",
        ObjectTypeParameter: "Activity",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Activity"
}
,{InternalName: "recAddressee",
Name: "addressee",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Addressee"
}
,{InternalName: "unkAll",
Name: "all",
        MethodGroup: "Other",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "All"
}
,{InternalName: "recAllContainersOf",
Name: "allContainersOf",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "All Containers Of"
}
,{InternalName: "recAllParts",
Name: "allParts",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "All parts Of"
}
,{InternalName: "recAllRelated",
Name: "allRelated",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "All records With Relationship To"
}
,{InternalName: "recAllVersions",
Name: "allVersions",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "All Versions"
}
,{InternalName: "recAltContains",
Name: "altContains",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Alternatively Contains"
}
,{InternalName: "recAnnotationsOf",
Name: "annotationsOf",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Annotation Of"
}
,{InternalName: "recAnyWord",
Name: "anyWord",
        MethodGroup: "Text",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Word",
        CanSort: false,
    Caption: "Any Word"
}
,{InternalName: "recAssignee",
Name: "assignee",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Assignee"
}
,{InternalName: "recAssigneex",
Name: "assigneex",
        MethodGroup: "Location",
        ObjectTypeParameter: "RecordLocation",
        ParameterFormat: "ChildList",
        CanSort: false,
    Caption: "Assignee Details"
}
,{InternalName: "recAtHome",
Name: "atHome",
        MethodGroup: "Location",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "At Home"
}
,{InternalName: "recKeyword",
Name: "keyword",
        MethodGroup: "Text",
        ObjectTypeParameter: "Keyword",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Attached thesaurus term"
}
,{InternalName: "recIndex",
Name: "index",
        MethodGroup: "Rm",
        ObjectTypeParameter: "RecordKeyword",
        ParameterFormat: "ChildList",
        CanSort: false,
    Caption: "Attached thesaurus term Details"
}
,{InternalName: "recAttachedTo",
Name: "attachedTo",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Attached To"
}
,{InternalName: "recAuthor",
Name: "author",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Author"
}
,{InternalName: "recAuthorizer",
Name: "authorizer",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Authorizer"
}
,{InternalName: "recPartRule",
Name: "partRule",
        MethodGroup: "Rm",
        ObjectTypeParameter: "AutoPartRule",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Automated Part Rule"
}
,{InternalName: "unkBarcode",
Name: "barcode",
        MethodGroup: "Reference",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Barcode"
}
,{InternalName: "recBasic",
Name: "basic",
        MethodGroup: "Type",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Basic Metadata Only"
}
,{InternalName: "unkBatch",
Name: "batch",
        MethodGroup: "Other",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Batch",
        CanSort: false,
    Caption: "Batch Number"
}
,{InternalName: "recBcc",
Name: "bcc",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Blind Copied"
}
,{InternalName: "recCanUseClass",
Name: "canUseClass",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Can Use Classification"
}
,{InternalName: "recCheckedInBy",
Name: "checkedInBy",
        MethodGroup: "Document",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Checked In By"
}
,{InternalName: "recCheckedInOn",
Name: "checkedInOn",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Checked In On"
}
,{InternalName: "recCheckedOutTray",
Name: "checkedOutTray",
        MethodGroup: "Tray",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Checked Out Documents"
}
,{InternalName: "recLockedOn",
Name: "lockedOn",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Checked Out On"
}
,{InternalName: "recCheckedOutBy",
Name: "checkedOutBy",
        MethodGroup: "Document",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Checked Out To"
}
,{InternalName: "recClassification",
Name: "classification",
        MethodGroup: "Reference",
        ObjectTypeParameter: "Classification",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Classification"
}
,{InternalName: "recCS_classifiedBy",
Name: "CS_classifiedBy",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Classified By"
}
,{InternalName: "recCS_classifiedByAgency",
Name: "CS_classifiedByAgency",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Classifying Agency"
}
,{InternalName: "recClient",
Name: "client",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Client"
}
,{InternalName: "recClientOf",
Name: "clientOf",
        MethodGroup: "ClientMatter",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Client Of"
}
,{InternalName: "recClientRecord",
Name: "clientRecord",
        MethodGroup: "ClientMatter",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Client record"
}
,{InternalName: "recParty",
Name: "party",
        MethodGroup: "ClientMatter",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Client/Matter Party"
}
,{InternalName: "recPartyEx",
Name: "partyEx",
        MethodGroup: "ClientMatter",
        ObjectTypeParameter: "RecordClientMatterParty",
        ParameterFormat: "ChildList",
        CanSort: false,
    Caption: "Client/Matter Party Details"
}
,{InternalName: "recRole",
Name: "role",
        MethodGroup: "ClientMatter",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Client/Matter Role"
}
,{InternalName: "recRoleEx",
Name: "roleEx",
        MethodGroup: "ClientMatter",
        ObjectTypeParameter: "RecordClientMatterRole",
        ParameterFormat: "ChildList",
        CanSort: false,
    Caption: "Client/Matter Role Details"
}
,{InternalName: "recCommunication",
Name: "communication",
        MethodGroup: "Rm",
        ObjectTypeParameter: "Communication",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Communication"
}
,{InternalName: "recConsignmentNumber",
Name: "consignmentNumber",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Consignment Number"
}
,{InternalName: "recContactx",
Name: "contactx",
        MethodGroup: "Location",
        ObjectTypeParameter: "RecordLocation",
        ParameterFormat: "ChildList",
        CanSort: false,
    Caption: "Contact Details"
}
,{InternalName: "recContact",
Name: "contact",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Contact location"
}
,{InternalName: "recContainer",
Name: "container",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Container"
}
,{InternalName: "recContainerEx",
Name: "containerEx",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Container (Including Alternate)"
}
,{InternalName: "recContains",
Name: "contains",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Contains"
}
,{InternalName: "recContainsEx",
Name: "containsEx",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Contains (Including Alternate)"
}
,{InternalName: "recContentBlockIn",
Name: "contentBlockIn",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Content Block In"
}
,{InternalName: "recMyContent",
Name: "myContent",
        MethodGroup: "Tray",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Content Blocks"
}
,{InternalName: "recCc",
Name: "cc",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Copied"
}
,{InternalName: "recCopyOf",
Name: "copyOf",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Copy Of"
}
,{InternalName: "recCreator",
Name: "creator",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Creator"
}
,{InternalName: "recCS_declassifiedBy",
Name: "CS_declassifiedBy",
        MethodGroup: "Security",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "CS Declassified By"
}
,{InternalName: "recCS_declassifiedOn",
Name: "CS_declassifiedOn",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: false,
    Caption: "CS Declassified On"
}
,{InternalName: "recCS_declassifyEvent",
Name: "CS_declassifyEvent",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "CS Declassify Event"
}
,{InternalName: "recCS_downgradeEvent",
Name: "CS_downgradeEvent",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "CS Downgrade Event"
}
,{InternalName: "recCS_downgradedBy",
Name: "CS_downgradedBy",
        MethodGroup: "Security",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "CS Downgraded By"
}
,{InternalName: "recCS_downgradedOn",
Name: "CS_downgradedOn",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: false,
    Caption: "CS Downgraded On"
}
,{InternalName: "recCS_changeType",
Name: "CS_changeType",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Enum",
        CanSort: true,
    Caption: "CS Latest Security Change Type"
}
,{InternalName: "recCS_upgradedBy",
Name: "CS_upgradedBy",
        MethodGroup: "Security",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "CS Upgraded By"
}
,{InternalName: "recCS_upgradedOn",
Name: "CS_upgradedOn",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: false,
    Caption: "CS Upgraded On"
}
,{InternalName: "recCS_declassify",
Name: "CS_declassify",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: false,
    Caption: "CS: Declassify On"
}
,{InternalName: "recCS_downgrade",
Name: "CS_downgrade",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: false,
    Caption: "CS: Downgrade On"
}
,{InternalName: "recCS_initial",
Name: "CS_initial",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "CS: Security At Registration"
}
,{InternalName: "recCurrentVersion",
Name: "currentVersion",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Current Version of"
}
,{InternalName: "recTransferredOn",
Name: "transferredOn",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date archived (custody transferred)"
}
,{InternalName: "recArchivedOn",
Name: "archivedOn",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date archives of ontario"
}
,{InternalName: "recClosedOn",
Name: "closedOn",
        MethodGroup: "Date",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date Closed"
}
,{InternalName: "recCreatedOn",
Name: "createdOn",
        MethodGroup: "Date",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date Created"
}
,{InternalName: "recFinalisedOn",
Name: "finalisedOn",
        MethodGroup: "Date",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date Declared As Final"
}
,{InternalName: "recDestroyedOn",
Name: "destroyedOn",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date destroyed"
}
,{InternalName: "recDueOn",
Name: "dueOn",
        MethodGroup: "Process",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date Due"
}
,{InternalName: "recImported",
Name: "imported",
        MethodGroup: "Date",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date Imported"
}
,{InternalName: "recInactiveOn",
Name: "inactiveOn",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date Inactive"
}
,{InternalName: "unkUpdated",
Name: "updated",
        MethodGroup: "Date",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date Last Updated"
}
,{InternalName: "recEditedOn",
Name: "editedOn",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date Modified"
}
,{InternalName: "recPublishedOn",
Name: "publishedOn",
        MethodGroup: "Date",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date Published"
}
,{InternalName: "recReceivedOn",
Name: "receivedOn",
        MethodGroup: "Date",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date Received"
}
,{InternalName: "recRegisteredOn",
Name: "registeredOn",
        MethodGroup: "Date",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date Registered"
}
,{InternalName: "recSupersededOn",
Name: "supersededOn",
        MethodGroup: "Date",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date Superseded"
}
,{InternalName: "recArchiveOn",
Name: "archiveOn",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date To archive (keep forever)"
}
,{InternalName: "recTransferOn",
Name: "transferOn",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date To archive (transfer custody)"
}
,{InternalName: "recDestroyOn",
Name: "destroyOn",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date To destroy"
}
,{InternalName: "recDestroyOnNoHold",
Name: "destroyOnNoHold",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date To destroy (no holds)"
}
,{InternalName: "recMakeInactiveOn",
Name: "makeInactiveOn",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Date To make inactive"
}
,{InternalName: "unkDefault",
Name: "default",
        MethodGroup: "Reference",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Default"
}
,{InternalName: "recCS_derivedFrom",
Name: "CS_derivedFrom",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Derived From"
}
,{InternalName: "recDerivedFrom",
Name: "derivedFrom",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Derived From"
}
,{InternalName: "recDisposition",
Name: "disposition",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Enum",
        CanSort: true,
    Caption: "Disposition"
}
,{InternalName: "recContent",
Name: "content",
        MethodGroup: "Text",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Freetext",
        CanSort: false,
    Caption: "Document Content"
}
,{InternalName: "recDocumenthash",
Name: "documenthash",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Document Hash"
}
,{InternalName: "recDocMissing",
Name: "docMissing",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Document Is Missing"
}
,{InternalName: "recAccessedOn",
Name: "accessedOn",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: false,
    Caption: "Document Last Accessed Date"
}
,{InternalName: "recReviewState",
Name: "reviewState",
        MethodGroup: "Process",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Enum",
        CanSort: true,
    Caption: "Document Review State"
}
,{InternalName: "recStore",
Name: "store",
        MethodGroup: "Document",
        ObjectTypeParameter: "ElectronicStore",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Document Store"
}
,{InternalName: "recMyTemplates",
Name: "myTemplates",
        MethodGroup: "Tray",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Document Templates"
}
,{InternalName: "recCS_downgradeInstructions",
Name: "CS_downgradeInstructions",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Downgrade Instructions"
}
,{InternalName: "recReturnOn",
Name: "returnOn",
        MethodGroup: "Rm",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Due for Return On"
}
,{InternalName: "recEditState",
Name: "editState",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Enum",
        CanSort: false,
    Caption: "Edit Status"
}
,{InternalName: "recEditor",
Name: "editor",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Editor"
}
,{InternalName: "recConversationId",
Name: "conversationId",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Email Conversation ID"
}
,{InternalName: "recMessageId",
Name: "messageId",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Email Message ID"
}
,{InternalName: "recEnclosed",
Name: "enclosed",
        MethodGroup: "Rm",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Enclosed"
}
,{InternalName: "recNumberx",
Name: "numberx",
        MethodGroup: "Reference",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Expanded Number"
}
,{InternalName: "recExtension",
Name: "extension",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Extension"
}
,{InternalName: "recEditingDone",
Name: "editingDone",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "External Editing Complete"
}
,{InternalName: "recEditingDoneBy",
Name: "editingDoneBy",
        MethodGroup: "Document",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "External Editing Completed By"
}
,{InternalName: "recEditorId",
Name: "editorId",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "External Editor Id"
}
,{InternalName: "recExternal",
Name: "external",
        MethodGroup: "Reference",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "External ID"
}
,{InternalName: "recExcase",
Name: "excase",
        MethodGroup: "Process",
        ObjectTypeParameter: "ExternalWorkflow",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "External Workflow Case"
}
,{InternalName: "recExinit",
Name: "exinit",
        MethodGroup: "Process",
        ObjectTypeParameter: "ExternalWorkflow",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "External Workflow Initiated"
}
,{InternalName: "unkFavorite",
Name: "favorite",
        MethodGroup: "Tray",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Favourite"
}
,{InternalName: "recFinal",
Name: "final",
        MethodGroup: "Other",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Final"
}
,{InternalName: "recFirstPart",
Name: "firstPart",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "First part Of"
}
,{InternalName: "recFirstVersionOf",
Name: "firstVersionOf",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "First Version Of"
}
,{InternalName: "recFolderOrigin",
Name: "folderOrigin",
        MethodGroup: "Rm",
        ObjectTypeParameter: "Origin",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Folder Origin"
}
,{InternalName: "unkFbarcode",
Name: "fbarcode",
        MethodGroup: "Reference",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Foreign Barcode"
}
,{InternalName: "recCheckinStyle",
Name: "checkinStyle",
        MethodGroup: "Document",
        ObjectTypeParameter: "CheckinStyle",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "From check in style"
}
,{InternalName: "recCombinedTitle",
Name: "combinedTitle",
        MethodGroup: "Other",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Full Title"
}
,{InternalName: "recGps",
Name: "gps",
        MethodGroup: "Location",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Geography",
        CanSort: true,
    Caption: "GPS Location"
}
,{InternalName: "recAltContainer",
Name: "altContainer",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Has Alternative Container"
}
,{InternalName: "recHasAnnotation",
Name: "hasAnnotation",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Has Annotation"
}
,{InternalName: "recHasAttachment",
Name: "hasAttachment",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Has Attachment"
}
,{InternalName: "recHasContentBlock",
Name: "hasContentBlock",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Has Content Block"
}
,{InternalName: "recHasContents",
Name: "hasContents",
        MethodGroup: "Rm",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: true,
    Caption: "Has Contents"
}
,{InternalName: "recHasContentsEx",
Name: "hasContentsEx",
        MethodGroup: "Rm",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Has Contents (Including Alternate)"
}
,{InternalName: "recHasDerivation",
Name: "hasDerivation",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Has Derivation"
}
,{InternalName: "recAttachments",
Name: "attachments",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Has Email Attachments"
}
,{InternalName: "recHasFirstPart",
Name: "hasFirstPart",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Has First part"
}
,{InternalName: "recHasFirstVersion",
Name: "hasFirstVersion",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Has First Version"
}
,{InternalName: "recHasHold",
Name: "hasHold",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: true,
    Caption: "Has Hold Attached"
}
,{InternalName: "recHasRedaction",
Name: "hasRedaction",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Has Redaction"
}
,{InternalName: "recHasReply",
Name: "hasReply",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Has Reply Of"
}
,{InternalName: "recSameClient",
Name: "sameClient",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Has Same Client As"
}
,{InternalName: "recSameContact",
Name: "sameContact",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Has Same Contact As"
}
,{InternalName: "recHasSite",
Name: "hasSite",
        MethodGroup: "SharePoint",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Has SharePoint Site"
}
,{InternalName: "recHold",
Name: "hold",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Hold",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Hold"
}
,{InternalName: "recIdol",
Name: "idol",
        MethodGroup: "Text",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Freetext",
        CanSort: false,
    Caption: "IDOL Query"
}
,{InternalName: "recHoldingBay",
Name: "holdingBay",
        MethodGroup: "Location",
        ObjectTypeParameter: "Space",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "In Holding Bay"
}
,{InternalName: "recReplyTo",
Name: "replyTo",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "In Reply To"
}
,{InternalName: "recInSpList",
Name: "inSpList",
        MethodGroup: "SharePoint",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "In SharePoint List"
}
,{InternalName: "recSpace",
Name: "space",
        MethodGroup: "Location",
        ObjectTypeParameter: "Space",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "In space"
}
,{InternalName: "recSpaceOrBay",
Name: "spaceOrBay",
        MethodGroup: "Location",
        ObjectTypeParameter: "Space",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "In space Or Holding Bay"
}
,{InternalName: "recMime",
Name: "mime",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Internet Media Type"
}
,{InternalName: "recElectronic",
Name: "electronic",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Is Electronic"
}
,{InternalName: "recSupersededBy",
Name: "supersededBy",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Is superseded by"
}
,{InternalName: "recJurisdiction",
Name: "jurisdiction",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Jurisdiction",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Jurisdiction"
}
,{InternalName: "recActionedOn",
Name: "actionedOn",
        MethodGroup: "Date",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Last Action Date"
}
,{InternalName: "recCheckedOutPath",
Name: "checkedOutPath",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Last Checked Out Path"
}
,{InternalName: "unkUpdatedBy",
Name: "updatedBy",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Last Updated By"
}
,{InternalName: "recLatestPart",
Name: "latestPart",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Latest part Of"
}
,{InternalName: "unkLatestTrans",
Name: "latestTrans",
        MethodGroup: "Date",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Latest Transaction Date"
}
,{InternalName: "recLatestVersion",
Name: "latestVersion",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Latest Version Of"
}
,{InternalName: "recHome",
Name: "home",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Location"
}
,{InternalName: "recHomex",
Name: "homex",
        MethodGroup: "Location",
        ObjectTypeParameter: "RecordLocation",
        ParameterFormat: "ChildList",
        CanSort: false,
    Caption: "Location Details"
}
,{InternalName: "unkExcludes",
Name: "excludes",
        MethodGroup: "Security",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Locations Excluded"
}
,{InternalName: "recM365Site",
Name: "m365Site",
        MethodGroup: "Document",
        ObjectTypeParameter: "M365Site",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "M365 Site Location"
}
,{InternalName: "recMatterOf",
Name: "matterOf",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Matter Of"
}
,{InternalName: "recMatterRecord",
Name: "matterRecord",
        MethodGroup: "ClientMatter",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Matter record"
}
,{InternalName: "recMedia",
Name: "media",
        MethodGroup: "Rm",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Enum",
        CanSort: true,
    Caption: "Media Type"
}
,{InternalName: "recMeeting",
Name: "meeting",
        MethodGroup: "Other",
        ObjectTypeParameter: "Meeting",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Meeting"
}
,{InternalName: "recMissing",
Name: "missing",
        MethodGroup: "Rm",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Missing"
}
,{InternalName: "unkNone",
Name: "none",
        MethodGroup: "Other",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "None"
}
,{InternalName: "recNotes",
Name: "notes",
        MethodGroup: "Text",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Word",
        CanSort: false,
    Caption: "Notes Word"
}
,{InternalName: "recOffline",
Name: "offline",
        MethodGroup: "Document",
        ObjectTypeParameter: "OfflineRecord",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Offline Record"
}
,{InternalName: "recOriginalOf",
Name: "originalOf",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Original Of"
}
,{InternalName: "recOrigin",
Name: "origin",
        MethodGroup: "Other",
        ObjectTypeParameter: "Origin",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Originated From"
}
,{InternalName: "recOriginRun",
Name: "originRun",
        MethodGroup: "Other",
        ObjectTypeParameter: "OriginHistory",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Originated From Run"
}
,{InternalName: "recOtherContact",
Name: "otherContact",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Other contact"
}
,{InternalName: "recOwner",
Name: "owner",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Owner"
}
,{InternalName: "recPriority",
Name: "priority",
        MethodGroup: "Process",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Priority"
}
,{InternalName: "recCS_reason",
Name: "CS_reason",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Reason(s) for Classification"
}
,{InternalName: "recCS_updatedReason",
Name: "CS_updatedReason",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Reason(s) for Update"
}
,{InternalName: "recMyContainers",
Name: "myContainers",
        MethodGroup: "Tray",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Recent Containers"
}
,{InternalName: "recMyDocuments",
Name: "myDocuments",
        MethodGroup: "Tray",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Recent Documents"
}
,{InternalName: "recAction",
Name: "action",
        MethodGroup: "Process",
        ObjectTypeParameter: "RecordAction",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Record Action"
}
,{InternalName: "recClass",
Name: "class",
        MethodGroup: "Type",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Enum",
        CanSort: true,
    Caption: "Record Class"
}
,{InternalName: "recReclocationx",
Name: "reclocationx",
        MethodGroup: "Location",
        ObjectTypeParameter: "RecordLocation",
        ParameterFormat: "ChildList",
        CanSort: false,
    Caption: "Record Location Details"
}
,{InternalName: "recNumber",
Name: "number",
        MethodGroup: "Reference",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Record Number"
}
,{InternalName: "recType",
Name: "type",
        MethodGroup: "Type",
        ObjectTypeParameter: "RecordType",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Record Type"
}
,{InternalName: "recDueTray",
Name: "dueTray",
        MethodGroup: "Tray",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Records Due"
}
,{InternalName: "recInTray",
Name: "inTray",
        MethodGroup: "Tray",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Records In"
}
,{InternalName: "recDueOrInTray",
Name: "dueOrInTray",
        MethodGroup: "Tray",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Records In or Due"
}
,{InternalName: "recWorkTray",
Name: "workTray",
        MethodGroup: "Tray",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Records Work Tray"
}
,{InternalName: "recRedactionOf",
Name: "redactionOf",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Redaction Of"
}
,{InternalName: "recRelated",
Name: "related",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Related To"
}
,{InternalName: "recRenditionEx",
Name: "renditionEx",
        MethodGroup: "Document",
        ObjectTypeParameter: "RecordRendition",
        ParameterFormat: "ChildList",
        CanSort: false,
    Caption: "Rendition Details"
}
,{InternalName: "recRepresentative",
Name: "representative",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Representative"
}
,{InternalName: "recRequest",
Name: "request",
        MethodGroup: "Rm",
        ObjectTypeParameter: "Request",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Request"
}
,{InternalName: "recRequestor",
Name: "requestor",
        MethodGroup: "Rm",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Requested By"
}
,{InternalName: "recRequestedOn",
Name: "requestedOn",
        MethodGroup: "Rm",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: false,
    Caption: "Requested On"
}
,{InternalName: "recReview",
Name: "review",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: true,
    Caption: "Retention Review Date"
}
,{InternalName: "recSchedule",
Name: "schedule",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Schedule",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Retention Schedule"
}
,{InternalName: "recReviewStatus",
Name: "reviewStatus",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Enum",
        CanSort: false,
    Caption: "Review Status"
}
,{InternalName: "recReviewer",
Name: "reviewer",
        MethodGroup: "Location",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: true,
    Caption: "Reviewer"
}
,{InternalName: "recRevisionEx",
Name: "revisionEx",
        MethodGroup: "Document",
        ObjectTypeParameter: "Revision",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Revision"
}
,{InternalName: "recRevision",
Name: "revision",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Number",
        CanSort: true,
    Caption: "Revision Number"
}
,{InternalName: "recConversation",
Name: "conversation",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Same Message Conversation As"
}
,{InternalName: "unkSaved",
Name: "saved",
        MethodGroup: "Other",
        ObjectTypeParameter: "SavedSearch",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Saved Search"
}
,{InternalName: "recScheduleStatus",
Name: "scheduleStatus",
        MethodGroup: "Retention",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Enum",
        CanSort: true,
    Caption: "Scheduled Disposal Status"
}
,{InternalName: "recTask",
Name: "task",
        MethodGroup: "Process",
        ObjectTypeParameter: "ScheduledTask",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Scheduled Task"
}
,{InternalName: "recSdmenv",
Name: "sdmenv",
        MethodGroup: "Other",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "SDM Environment ID"
}
,{InternalName: "recSdmfile",
Name: "sdmfile",
        MethodGroup: "Other",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "SDM File Name"
}
,{InternalName: "recSdmfolder",
Name: "sdmfolder",
        MethodGroup: "Other",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "SDM Folder Name"
}
,{InternalName: "recSdmrun",
Name: "sdmrun",
        MethodGroup: "Other",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "SDM Run ID"
}
,{InternalName: "recSecurityCaveat",
Name: "securityCaveat",
        MethodGroup: "Security",
        ObjectTypeParameter: "SecurityCaveat",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Security Caveat"
}
,{InternalName: "recCS_guide",
Name: "CS_guide",
        MethodGroup: "Security",
        ObjectTypeParameter: "SecurityGuide",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Security Guide Entry"
}
,{InternalName: "recCS_updatedBy",
Name: "CS_updatedBy",
        MethodGroup: "Security",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Security Last Updated By"
}
,{InternalName: "recCS_updatedOn",
Name: "CS_updatedOn",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: false,
    Caption: "Security Last Updated Date"
}
,{InternalName: "recSecurityLevel",
Name: "securityLevel",
        MethodGroup: "Security",
        ObjectTypeParameter: "SecurityLevel",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Security Level"
}
,{InternalName: "recCS_atRegistration",
Name: "CS_atRegistration",
        MethodGroup: "Security",
        ObjectTypeParameter: "SecurityLevel",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Security Level At Registration"
}
,{InternalName: "recCS_reviewedBy",
Name: "CS_reviewedBy",
        MethodGroup: "Security",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Security Reviewed By"
}
,{InternalName: "recCS_reviewedOn",
Name: "CS_reviewedOn",
        MethodGroup: "Security",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "DateRange",
        CanSort: false,
    Caption: "Security Reviewed Date"
}
,{InternalName: "recIsSeriesOf",
Name: "isSeriesOf",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Series record For"
}
,{InternalName: "recSpGUID",
Name: "spGUID",
        MethodGroup: "SharePoint",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "SharePoint GUID"
}
,{InternalName: "recSpList",
Name: "spList",
        MethodGroup: "SharePoint",
        ObjectTypeParameter: "SharePointItem",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "SharePoint List"
}
,{InternalName: "recSpLirId",
Name: "spLirId",
        MethodGroup: "SharePoint",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "BigNumber",
        CanSort: false,
    Caption: "SharePoint List Item ID"
}
,{InternalName: "recSpLirURL",
Name: "spLirURL",
        MethodGroup: "SharePoint",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "SharePoint List URL"
}
,{InternalName: "recSpType",
Name: "spType",
        MethodGroup: "SharePoint",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Enum",
        CanSort: false,
    Caption: "SharePoint Object Type"
}
,{InternalName: "recSpRecord",
Name: "spRecord",
        MethodGroup: "SharePoint",
        ObjectTypeParameter: "SharePointItem",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "SharePoint Record"
}
,{InternalName: "recSpFarmGUID",
Name: "spFarmGUID",
        MethodGroup: "SharePoint",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "SharePoint Server Farm ID"
}
,{InternalName: "recSpSiteCollectionGUID",
Name: "spSiteCollectionGUID",
        MethodGroup: "SharePoint",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "SharePoint Site Collection ID"
}
,{InternalName: "recSpURL",
Name: "spURL",
        MethodGroup: "SharePoint",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "SharePoint URL"
}
,{InternalName: "recDocumentSize",
Name: "documentSize",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "BigNumber",
        CanSort: true,
    Caption: "Size"
}
,{InternalName: "recSupersedes",
Name: "supersedes",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Supersedes"
}
,{InternalName: "recTypedTitle",
Name: "typedTitle",
        MethodGroup: "Other",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Title (Free Text Part)"
}
,{InternalName: "recGeneratedTitle",
Name: "generatedTitle",
        MethodGroup: "Other",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: true,
    Caption: "Title (Structured Part)"
}
,{InternalName: "recTitle",
Name: "title",
        MethodGroup: "Text",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Word",
        CanSort: false,
    Caption: "Title Word"
}
,{InternalName: "recTitleAdv",
Name: "titleAdv",
        MethodGroup: "Text",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Word",
        CanSort: false,
    Caption: "Title Word(Advanced)"
}
,{InternalName: "recTodo",
Name: "todo",
        MethodGroup: "Process",
        ObjectTypeParameter: "TodoItem",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "To Do Item"
}
,{InternalName: "unkUri",
Name: "uri",
        MethodGroup: "Reference",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Uri",
        CanSort: true,
    Caption: "Unique Identifier"
}
,{InternalName: "recViews",
Name: "views",
        MethodGroup: "Document",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "BigNumber",
        CanSort: true,
    Caption: "View Counter"
}
,{InternalName: "unkLabel",
Name: "label",
        MethodGroup: "Tray",
        ObjectTypeParameter: "UserLabel",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "With Label"
}
,{InternalName: "recRelatedEx",
Name: "relatedEx",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "ObjectAndEnum",
        CanSort: false,
    Caption: "With Relationship To"
}
,{InternalName: "recRelatedReverseEx",
Name: "relatedReverseEx",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "ObjectAndEnum",
        CanSort: false,
    Caption: "With Reverse Relationship To"
}
,{InternalName: "recInSeries",
Name: "inSeries",
        MethodGroup: "Linked",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Within Series"
}
,{InternalName: "recInSite",
Name: "inSite",
        MethodGroup: "SharePoint",
        ObjectTypeParameter: "Record",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Within SharePoint Site"
}
,{InternalName: "recWorkflow",
Name: "workflow",
        MethodGroup: "Process",
        ObjectTypeParameter: "Workflow",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Workflow"
}
			,                                                   
{InternalName: "ActualDispositionDate",
Name: "Actual Disposition Date",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Date",
        CanSort: false,
    Caption: "Actual Disposition Date"
}
			,                                                   
{InternalName: "AisleA",
Name: "Aisle (A)",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Aisle (A)"
}
			,                                                   
{InternalName: "Applicant",
Name: "Applicant",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Applicant"
}
			,                                                   
{InternalName: "ApplicationProcess",
Name: "Application / Process",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Application / Process"
}
			,                                                   
{InternalName: "ApplicationSubSubType",
Name: "Application Sub Sub Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Application Sub Sub Type"
}
			,                                                   
{InternalName: "ApplicationSubType",
Name: "Application Sub Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Application Sub Type"
}
			,                                                   
{InternalName: "ApprovalDate",
Name: "Approval Date",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Date",
        CanSort: false,
    Caption: "Approval Date"
}
			,                                                   
{InternalName: "BayB",
Name: "Bay (B)",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Bay (B)"
}
			,                                                   
{InternalName: "BoxLocation",
Name: "Box Location",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Text",
        CanSort: false,
    Caption: "Box Location"
}
			,                                                   
{InternalName: "CartonC",
Name: "Carton (C)",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Carton (C)"
}
			,                                                   
{InternalName: "CaseDescription",
Name: "Case Description",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Case Description"
}
			,                                                   
{InternalName: "CaseNumber",
Name: "Case Number",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Case Number"
}
			,                                                   
{InternalName: "CERDocumentType",
Name: "CER Document Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "CER Document Type"
}
			,                                                   
{InternalName: "CIDocumentType",
Name: "CI Document Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "CI Document Type"
}
			,                                                   
{InternalName: "Client",
Name: "Client",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Client"
}
			,                                                   
{InternalName: "COMDocumentType",
Name: "COM Document Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "COM Document Type"
}
			,                                                   
{InternalName: "Complainant",
Name: "Complainant",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Complainant"
}
			,                                                   
{InternalName: "Contact",
Name: "Contact",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Contact"
}
			,                                                   
{InternalName: "ContainsRecordsFromYr",
Name: "Contains Records From (Yr)",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Number",
        CanSort: false,
    Caption: "Contains Records From (Yr)"
}
			,                                                   
{InternalName: "CORRESPONDENCETYPE",
Name: "CORRESPONDENCE TYPE",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "CORRESPONDENCE TYPE"
}
			,                                                   
{InternalName: "CUNUMBER",
Name: "CU NUMBER",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "CU NUMBER"
}
			,                                                   
{InternalName: "DateDigitized",
Name: "Date Digitized",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Date",
        CanSort: false,
    Caption: "Date Digitized"
}
			,                                                   
{InternalName: "DateIssued",
Name: "Date Issued",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Date",
        CanSort: false,
    Caption: "Date Issued"
}
			,                                                   
{InternalName: "fDateReceived",
Name: "Date Received by OEB",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Date",
        CanSort: false,
    Caption: "Date Received by OEB"
}
			,                                                   
{InternalName: "DecisionDesc",
Name: "Decision Desc",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Text",
        CanSort: false,
    Caption: "Decision Desc"
}
			,                                                   
{InternalName: "DispositionStatus",
Name: "Disposition Status",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Disposition Status"
}
			,                                                   
{InternalName: "DocumentStatus",
Name: "Document Status",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Document Status"
}
			,                                                   
{InternalName: "WebDocumentType",
Name: "Document Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Document Type"
}
			,                                                   
{InternalName: "DueDispositionDate",
Name: "Due Disposition Date",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Date",
        CanSort: false,
    Caption: "Due Disposition Date"
}
			,                                                   
{InternalName: "EnergyType",
Name: "Energy Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Energy Type"
}
			,                                                   
{InternalName: "FunctionSubject",
Name: "Function/Subject",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Text",
        CanSort: false,
    Caption: "Function/Subject"
}
			,                                                   
{InternalName: "InteractionReferenceNumber",
Name: "Interaction Reference Number",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Interaction Reference Number"
}
			,                                                   
{InternalName: "InteractionType",
Name: "Interaction Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Interaction Type"
}
			,                                                   
{InternalName: "IssueType",
Name: "Issue Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Issue Type"
}
			,                                                   
{InternalName: "LicenceNumber",
Name: "Licence Number",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Licence Number"
}
			,                                                   
{InternalName: "LicenceType",
Name: "Licence Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Licence Type"
}
			,                                                   
{InternalName: "LicenseeNonLicensee",
Name: "Licensee / Non-Licensee",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Licensee / Non-Licensee"
}
			,                                                   
{InternalName: "MPEDocumentType",
Name: "MPE Document Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "MPE Document Type"
}
			,                                                   
{InternalName: "NumberOfPagesDigitized",
Name: "Number of Pages Digitized",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Number",
        CanSort: false,
    Caption: "Number of Pages Digitized"
}
			,                                                   
{InternalName: "OEBDocumentType",
Name: "OEB Document Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "OEB Document Type"
}
			,                                                   
{InternalName: "PivotalID",
Name: "Pivotal ID",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Pivotal ID"
}
			,                                                   
{InternalName: "PrimaryApplicationType",
Name: "Primary Application Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Primary Application Type"
}
			,                                                   
{InternalName: "PrivacyConsent",
Name: "Privacy Consent",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Privacy Consent"
}
			,                                                   
{InternalName: "ProjectClose",
Name: "Project Close",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Date",
        CanSort: false,
    Caption: "Project Close"
}
			,                                                   
{InternalName: "ProjectManager",
Name: "Project Manager",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Location",
        ParameterFormat: "Object",
        CanSort: false,
    Caption: "Project Manager"
}
			,                                                   
{InternalName: "ProjectStart",
Name: "Project Start",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Date",
        CanSort: false,
    Caption: "Project Start"
}
			,                                                   
{InternalName: "PublishToInternet",
Name: "Publish to Internet",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Publish to Internet"
}
			,                                                   
{InternalName: "PublishToIntranet",
Name: "Publish to Intranet?",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Publish to Intranet?"
}
			,                                                   
{InternalName: "QAOperator",
Name: "QA Operator",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "QA Operator"
}
			,                                                   
{InternalName: "ReadyToPublishToInternet",
Name: "Ready to Publish to Internet?",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Boolean",
        CanSort: false,
    Caption: "Ready to Publish to Internet?"
}
			,                                                   
{InternalName: "ReferenceNumber",
Name: "Reference Number",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Reference Number"
}
			,                                                   
{InternalName: "ResponseDate",
Name: "Response Date",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Date",
        CanSort: false,
    Caption: "Response Date"
}
			,                                                   
{InternalName: "RESSDateTime",
Name: "RESS_DateTime",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Datetime",
        CanSort: false,
    Caption: "RESS_DateTime"
}
			,                                                   
{InternalName: "ScannerOperator",
Name: "Scanner Operator",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Scanner Operator"
}
			,                                                   
{InternalName: "ShelfS",
Name: "Shelf (S)",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Shelf (S)"
}
			,                                                   
{InternalName: "SIDocumentType",
Name: "SI Document Type",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Text",
        CanSort: false,
    Caption: "SI Document Type"
}
			,                                                   
{InternalName: "TemporaryBoxNumber",
Name: "Temporary Box Number",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Temporary Box Number"
}
			,                                                   
{InternalName: "ToYr",
Name: "To (Yr)",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Number",
        CanSort: false,
    Caption: "To (Yr)"
}
			,                                                   
{InternalName: "TransferDate",
Name: "Transfer Date",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Date",
        CanSort: false,
    Caption: "Transfer Date"
}
			,                                                   
{InternalName: "TransferDateToOEB",
Name: "Transfer Date to OEB",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "Date",
        CanSort: false,
    Caption: "Transfer Date to OEB"
}
			,                                                   
{InternalName: "TransferNumber",
Name: "Transfer Number",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Transfer Number"
}
			,                                                   
{InternalName: "WarehouseCode",
Name: "Warehouse Code",
        MethodGroup: "Additional Fields",
        ObjectTypeParameter: "Unknown",
        ParameterFormat: "String",
        CanSort: false,
    Caption: "Warehouse Code"
}

    ];
