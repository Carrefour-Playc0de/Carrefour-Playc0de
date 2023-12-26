import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosQuesosCremososMozzarellas extends BasePage {

    readonly QUESOS_CREMOSOS_MOZZARELLAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.QUESOS_CREMOSOS_MOZZARELLAS = this.page.locator('//a [@id="menu-item-category-quesos-cremosos-mozzarellas"]')
    }

    async clickLacteosProdsFrescosQuesosCremososMozzarellas(): Promise<void> {
        await this.click(this.QUESOS_CREMOSOS_MOZZARELLAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosQuesosCremososMozzarellas(): Promise<void> {
        await this.clickLacteosProdsFrescosQuesosCremososMozzarellas()
    }
}
