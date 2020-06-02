<h1>Scroll To Vertical</h1>

`Smooth scroll to element or position at page. Takes into account document height for elements low on the page.`


<h2>API</h2>
<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>selector:string (required)</strong> </td>
            <td>css selector</td>
        </tr>
        <tr>
            <td><strong>isBehavior:boolean</strong> </td>
            <td>
                <p>default: <strong>true</strong></p>
                use native <code>window.scrollTo</code> (if the browser supports)
            </td>
        </tr>
        <tr>
            <td><strong>behavior:string</strong> </td>
            <td>
                <p>default: <strong>smooth</strong></p>
                option for <code>window.scrollTo</code>
                <code>smooth, instant, auto</code>
            </td>
        </tr>
        <tr>
            <td><strong>typeToScroll:string | number | function</strong> </td>
            <td>
                <p>default: <strong>string: href</strong></p>
                <p>
                    string - name of the attribute where the selector of the element to which scrolling should lie
                    <br />
                    example: <code>href</code>, <code>data-href</code>
                </p>
                <p>
                    number - position on the page where you want to scroll
                    <br />
                    example: 0 - to scroll up
                </p>
                <p>
                    function - triggered by every event. Returns the number. Point to scroll to
                    <br />
                    example: return document.documentElement.scrollHeight - to scroll bottom page
                </p>
            </td>
        </tr>
        <tr>
            <td><strong>step:number</strong> </td>
            <td>
                <p>default: <strong>50</strong></p>
                number of pixels scrolled at a time
            </td>
        </tr>
        <tr>
            <td><strong>typeToScrollAdd:number</strong> </td>
            <td>
                <p>default: <strong>0</strong></p>
                indent for the end point of the scroll
            </td>
        </tr>
        <tr>
            <td><strong>eventType:string</strong> </td>
            <td>
                <p>default: <strong>click</strong></p>
                event 'click' | 'mouseover' ... 
            </td>
        </tr>
        <tr>
            <td colspan="2"> <h5>Callbacks</h5> </td>
        </tr>
        <tr>
            <td><strong>loadCallback</strong> </td>
            <td>
                callback function that is called upon initialization
                <p>
                    <strong>parameters</strong>: this - instance class
                </p>
            </td>
        </tr>
        <tr>
            <td><strong>startEventCallback</strong> </td>
            <td>
                callback function that is called before eventType (click)
                <p>
                    <strong>parameters</strong>: event, this, element, endScrollPosition
                </p>
            </td>
        </tr>
        <tr>
            <td><strong>beforeAnimationCallback</strong> </td>
            <td>
                callback function that is called before start animation
                <p>
                    <strong>parameters</strong>: this, element, endScrollPosition
                </p>
            </td>
        </tr>
        <tr>
            <td><strong>afterAnimationCallback</strong> </td>
            <td>
                callback function that is called after finish animation*
                <br />
                *not working on native window.scrollTo (isBehavior=true)
                <p>
                    <strong>parameters</strong>: this - instance class
                </p>
            </td>
        </tr>
    </tbody>
</table>
<h2>Example Usage</h2>
<pre>
<code>
import ScrollTo from 'scrollTo.js';
new ScrollTo({
  selector: '.top',
  eventType: 'mouseover',
  behavior: "smooth",
  typeToScroll: 0
})
</code>
</pre>

<h2>Browser Support</h2>
Supported on all modern browsers. For older browsers, you would need the polyfills for <code>requestAnimationFrame</code>.
<br />

