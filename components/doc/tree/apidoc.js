import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="treenodeapi" label="TreeNode API">
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>key</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Unique key of the node.</td>
                            </tr>
                            <tr>
                                <td>label</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Label of the node.</td>
                            </tr>
                            <tr>
                                <td>data</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Data represented by the node.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icon of the node to display next to content.</td>
                            </tr>
                            <tr>
                                <td>children</td>
                                <td>TreeNode[]</td>
                                <td>null</td>
                                <td>An array of treenodes as children.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the node.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the node.</td>
                            </tr>
                            <tr>
                                <td>draggable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether the node is draggable when dragdrop is enabled.</td>
                            </tr>
                            <tr>
                                <td>droppable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether the node is droppable when dragdrop is enabled.</td>
                            </tr>
                            <tr>
                                <td>selectable</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Whether the node is selectable when selection mode is enabled.</td>
                            </tr>
                            <tr>
                                <td>leaf</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Specifies if the node has children. Used in lazy loading.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <CodeHighlight>
                    {`
<Tree value={data} />
`}
                </CodeHighlight>
            </DocSubSection>

            <DocSubSection id="properties" label="Properties">
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of treenodes.</td>
                            </tr>
                            <tr>
                                <td>selectionMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the selection mode, valid values "single", "multiple", and "checkbox".</td>
                            </tr>
                            <tr>
                                <td>selectionKeys</td>
                                <td>any</td>
                                <td>null</td>
                                <td>A single or an array of keys to control the selection state.</td>
                            </tr>
                            <tr>
                                <td>contextMenuSelectionKey</td>
                                <td>any</td>
                                <td>null</td>
                                <td>A single key to control the selection with the context menu.</td>
                            </tr>
                            <tr>
                                <td>expandedKeys</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of keys to represent the state of the tree expansion state in controlled mode.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the component.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the component.</td>
                            </tr>
                            <tr>
                                <td>contentStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the tree content.</td>
                            </tr>
                            <tr>
                                <td>contentClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the tree content.</td>
                            </tr>
                            <tr>
                                <td>metaKeySelection</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>
                                    Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices,
                                    metaKeySelection is turned off automatically.
                                </td>
                            </tr>
                            <tr>
                                <td>propagateSelectionUp</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether checkbox selections propagate to ancestor nodes.</td>
                            </tr>
                            <tr>
                                <td>propagateSelectionDown</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether checkbox selections propagate to descendant nodes.</td>
                            </tr>
                            <tr>
                                <td>loading</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to display loading indicator.</td>
                            </tr>
                            <tr>
                                <td>loadingIcon</td>
                                <td>string</td>
                                <td>pi pi-spin</td>
                                <td>Icon to display when tree is loading.</td>
                            </tr>
                            <tr>
                                <td>dragdropScope</td>
                                <td>string</td>
                                <td>false</td>
                                <td>Unique key to enable dragdrop functionality.</td>
                            </tr>
                            <tr>
                                <td>header</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of header.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of footer.</td>
                            </tr>
                            <tr>
                                <td>ariaLabel</td>
                                <td>string</td>
                                <td>false</td>
                                <td>Used to define a string that labels the component.</td>
                            </tr>
                            <tr>
                                <td>ariaLabelledBy</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Contains the element IDs of labels.</td>
                            </tr>
                            <tr>
                                <td>nodeTemplate</td>
                                <td>any</td>
                                <td>false</td>
                                <td>Template of node element.</td>
                            </tr>
                            <tr>
                                <td>filterTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of filter element.</td>
                            </tr>
                            <tr>
                                <td>togglerTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of toggler element.</td>
                            </tr>
                            <tr>
                                <td>filterTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of filter element.</td>
                            </tr>
                            <tr>
                                <td>showHeader</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show the header or not.</td>
                            </tr>
                            <tr>
                                <td>filter</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When specified, displays an input field to filter the items.</td>
                            </tr>
                            <tr>
                                <td>filterValue</td>
                                <td>string</td>
                                <td>null</td>
                                <td>When filtering is enabled, the value of input field.</td>
                            </tr>
                            <tr>
                                <td>filterBy</td>
                                <td>string</td>
                                <td>label</td>
                                <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>
                            </tr>
                            <tr>
                                <td>filterMode</td>
                                <td>string</td>
                                <td>lenient</td>
                                <td>Mode for filtering valid values are "lenient" and "strict". Default is lenient.</td>
                            </tr>
                            <tr>
                                <td>filterPlaceholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Placeholder text to show when filter input is empty.</td>
                            </tr>
                            <tr>
                                <td>filterLocale</td>
                                <td>string</td>
                                <td>undefined</td>
                                <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should be disabled.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="event" label="Events">
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onSelect</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Selected node instance.
                                </td>
                                <td>Callback to invoke when a node is selected.</td>
                            </tr>
                            <tr>
                                <td>onUnselect</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Unselected node instance.
                                </td>
                                <td>Callback to invoke when a node is unselected.</td>
                            </tr>
                            <tr>
                                <td>onExpand</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Expanded node instance.
                                </td>
                                <td>Callback to invoke when a node is expanded.</td>
                            </tr>
                            <tr>
                                <td>onCollapse</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Collapsed node instance.
                                </td>
                                <td>Callback to invoke when a node is collapsed.</td>
                            </tr>
                            <tr>
                                <td>onSelectionChange</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.value: Selected node key(s).
                                </td>
                                <td>Callback to invoke when selection changes.</td>
                            </tr>
                            <tr>
                                <td>onContextMenuSelectionChange</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.value: Selected node key.
                                </td>
                                <td>Callback to invoke when selection changes with a context menu.</td>
                            </tr>
                            <tr>
                                <td>onToggle</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Toggled node instance.
                                </td>
                                <td>Callback to invoke when a node is toggled.</td>
                            </tr>
                            <tr>
                                <td>onDragDrop</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.value: New value after the dragdrop.
                                </td>
                                <td>Callback to invoke when a node is selected.</td>
                            </tr>
                            <tr>
                                <td>onContextMenu</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Selected node instance.
                                </td>
                                <td>Callback to invoke when a node is selected with a context menu.</td>
                            </tr>
                            <tr>
                                <td>onFilterValueChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: the filtered value <br />
                                </td>
                                <td>Callback to invoke when filter value changes.</td>
                            </tr>
                            <tr>
                                <td>onNodeClick</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.node: the current node <br />
                                </td>
                                <td>Callback to invoke when the node is clicked.</td>
                            </tr>
                            <tr>
                                <td>onNodeDoubleClick</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.node: the current node <br />
                                </td>
                                <td>Callback to invoke when the node is double-clicked.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="methods" label="Methods">
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>filter</td>
                                <td>value: the filter value</td>
                                <td>Filters the data.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="styling" label="Styling">
                <p>Following is the list of structural style classes</p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>p-tree</td>
                                <td>Main container element</td>
                            </tr>
                            <tr>
                                <td>p-tree-horizontal</td>
                                <td>Main container element in horizontal mode</td>
                            </tr>
                            <tr>
                                <td>p-tree-container</td>
                                <td>Container of nodes</td>
                            </tr>
                            <tr>
                                <td>p-treenode</td>
                                <td>A treenode element</td>
                            </tr>
                            <tr>
                                <td>p-treenode-content</td>
                                <td>Content of a treenode</td>
                            </tr>
                            <tr>
                                <td>p-treenode-toggler</td>
                                <td>Toggle element</td>
                            </tr>
                            <tr>
                                <td>p-treenode-toggler-icon</td>
                                <td>Toggle icon</td>
                            </tr>
                            <tr>
                                <td>p-treenode-icon</td>
                                <td>Icon of a treenode</td>
                            </tr>
                            <tr>
                                <td>p-treenode-label</td>
                                <td>Label of a treenode</td>
                            </tr>
                            <tr>
                                <td>p-treenode-children</td>
                                <td>Container element for node children</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. The root list element has a <i>tree</i> role whereas each list item has a <i>treeitem</i> role along with{' '}
                        <i>aria-label</i>, <i>aria-selected</i> and <i>aria-expanded</i> attributes. In checkbox selection, <i>aria-checked</i> is used instead of <i>aria-selected</i>. The container element of a treenode has the <i>group</i> role.
                        Checkbox and toggle icons are hidden from screen readers as their parent element with <i>treeitem</i> role and attributes are used instead for readers and keyboard support. The <i>aria-setsize</i>, <i>aria-posinset</i> and{' '}
                        <i>aria-level</i> attributes are calculated implicitly and added to each treeitem.
                    </p>

                    <h4>Keyboard Support</h4>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <i>tab</i>
                                    </td>
                                    <td>
                                        Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable
                                        element in the page tab sequence.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>shift</i> + <i>tab</i>
                                    </td>
                                    <td>
                                        Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable
                                        element in the page tab sequence.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Selects the focused treenode.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Selects the focused treenode.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>down arrow</i>
                                    </td>
                                    <td>Moves focus to the next treenode.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Moves focus to the previous treenode.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>right arrow</i>
                                    </td>
                                    <td>If node is closed, opens the node otherwise moves focus to the first child node.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>left arrow</i>
                                    </td>
                                    <td>If node is open, closes the node otherwise moves focus to the parent node.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
